import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response  } from "express";
import { Model } from 'mongoose';
import { User } from '../../DB/Schemas/user.schema';
import { DBMethods } from '../../DB/DBMethods';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { AuthReq } from '../../Types/Auth';
import { signupBodyDto } from './auth.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private _userModel: Model<User>,
        private _dbMethod: DBMethods,
        private _jwtService: JwtService
    ){ }
    // async signUpService(body:signupBodyDto, response:Response) : Promise<Response> {
    // async signUpService(request:Request, response:Response) : Promise<Response> {
    async signUpService(body:any, response:Response) : Promise<Response> {
        // const { name, email, password, gender } = request.body;
        const { name, email, password, gender } = body;
        // const user = await this._userModel.create({ name, email, password, gender });
        const isEmailExist = await this._dbMethod.findOneDocument(this._userModel, { email});
        if(isEmailExist){
            throw new BadRequestException('Email already exists');
        }
        const hashedPass = bcrypt.hashSync(password as string, 8 as number);
        const userObject  = { name, email, gender, password : hashedPass  };
        // validation (male, female)
        const savedUser = await this._dbMethod.saveDocument(this._userModel, userObject);
        if(!savedUser){
            throw new BadRequestException('Could not create user');
        }
        return response.status(201).json({ message : "User created successfully", savedUser});
    }

    async loginService(request:Request, response:Response) : Promise<Response> {
        const { email, password } = request.body;
        const userExist = await this._dbMethod.findOneDocument(this._userModel, { email});
        if(!userExist){
            throw new BadRequestException('Invalid Login credentials');
        }
        const isPasswordMatch = await bcrypt.compareSync(password, userExist['password']);
        if(!isPasswordMatch){
            throw new BadRequestException('Invalid Login credentials');
        }
        const token = this._jwtService.sign({
            email : userExist['email'],
            id: userExist['_id'],
        }, {
            secret : 'test-token'
        });
        return response.status(200).json({ message : "Done", token});
    }

    async getUserDataService(request:AuthReq, response:Response) : Promise<Response> {
        const { _id } = request.user;
        const user = await this._dbMethod.findOneDocument(this._userModel, { _id});
        return response.status(200).json({ message: 'done', user });
    }
}