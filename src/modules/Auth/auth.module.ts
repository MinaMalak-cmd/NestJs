import { Module } from "@nestjs/common";
import { AuthControler } from "./auth.controller";
import { AuthService } from "./auth.service";
import { models } from "../../DB/models.generations";
import { DBMethods } from "../../DB/DBMethods";


@Module({
    imports: [models],
    controllers: [AuthControler],
    providers: [AuthService, DBMethods],
})

export class AuthModule {}