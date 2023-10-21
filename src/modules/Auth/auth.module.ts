import { Module } from "@nestjs/common";
import { AuthControler } from "./auth.controller";
import { AuthService } from "./auth.service";
import { models } from "../../DB/models.generations";
import { DBMethods } from "../../DB/DBMethods";
import { JwtService } from '@nestjs/jwt';


@Module({
    imports: [models],
    controllers: [AuthControler],
    providers: [AuthService, DBMethods, JwtService],
})

export class AuthModule {}