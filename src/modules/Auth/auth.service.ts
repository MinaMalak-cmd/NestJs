import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response  } from "express";
import { Model } from 'mongoose';
import { User } from '../../DB/Schemas/user.schema';
import { DBMethods } from '../../DB/DBMethods';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private _userModel: Model<User>,
        private _dbMethod: DBMethods
    ){ }
    async signUpService(request:Request, response:Response) : Promise<Response> {
        const { name, email, password, gender } = request.body;
        // const user = await this._userModel.create({ name, email, password, gender });
        const isEmailExist = await this._dbMethod.findOneDocument(this._userModel, { email});
        if(isEmailExist){
            throw new BadRequestException('Email already exists');
        }
        // validation (male, female)
        const user = await this._dbMethod.createDocumnet(this._userModel,{ name, email, password, gender });
        return response.status(201).json({ message : "User created successfully", user});
    }
}