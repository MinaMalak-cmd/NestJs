import { Injectable } from '@nestjs/common';
import { Request, Response  } from "express";


@Injectable()
export class AuthService {
    signUp(request:Request, response:Response) : Response {
        return response.status(200).json({ message : "Done", name : request.body.name});
    }
}