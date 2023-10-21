import { Controller, Post, Request, Response, Get, UseGuards} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request as REQUEST, Response as RESPONSE } from "express";
import { AuthGuard } from "../../Guards/auth.guard";
import { AuthReq } from "../../Types/Auth";


// @Controller('/auth')
@Controller({ path : 'auth'})
export class AuthControler {
    constructor(private readonly _authService: AuthService){}

    @Post('signup')
    signUp(@Request() request: REQUEST, @Response() response:RESPONSE ) : Promise<RESPONSE> {
        return this._authService.signUpService(request, response);
    }
    @Post('login')
    loginService(@Request() request: REQUEST, @Response() response:RESPONSE ) : Promise<RESPONSE> {
        return this._authService.loginService(request, response);
    }
    @UseGuards(AuthGuard)
    @Get('user')
    getUesrDataHandler(
        @Request() request: AuthReq, @Response() response:RESPONSE
    ) : Promise<RESPONSE> {
        return this._authService.getUserDataService(request, response)
    }
}