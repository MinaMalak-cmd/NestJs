import { Module } from "@nestjs/common";
import { AuthControler } from "./auth.controller";
import { AuthService } from "./auth.service";
import { models } from "../../DB/models.generations";


@Module({
    imports: [models],
    controllers: [AuthControler],
    providers: [AuthService],
})

export class AuthModule {}