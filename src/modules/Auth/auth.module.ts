import { Module } from "@nestjs/common";
import { AuthControler } from "./auth.controller";
import { AuthService } from "./auth.service";


@Module({
    imports: [],
    controllers: [AuthControler],
    providers: [AuthService],
})

export class AuthModule {}