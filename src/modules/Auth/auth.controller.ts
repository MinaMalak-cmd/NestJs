import { Body, Controller, Param, Post, Query, Request, Response } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request as REQUEST, Response as RESPONSE } from "express";


// @Controller('/auth')
@Controller({ path : 'auth'})
export class AuthControler {
    constructor(private readonly authService: AuthService){}

    @Post('signup')
    // signUp(@Body() body: any, @Query() query:any ) : string { first way
    signUp(@Request() request: REQUEST, @Response() response:RESPONSE ) : Promise<RESPONSE> {
        return this.authService.signUp(request, response);
    }
}