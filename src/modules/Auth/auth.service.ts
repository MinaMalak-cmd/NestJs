import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response  } from "express";
import { Model } from 'mongoose';
import { User } from '../../DB/Schemas/user.schema';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private _userModel: Model<User>
    ){ }
    async signUp(request:Request, response:Response) : Promise<Response> {
        const { name, email, password, gender } = request.body;
        const user = await this._userModel.create({ name, email, password, gender });
        return response.status(200).json({ message : "Done", user});
    }
}