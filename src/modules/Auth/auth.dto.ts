import { IsString, MinLength, MaxLength, IsNumber, IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class signupBodyDto {
    @IsString()
    @MinLength(3, {
        message : 'your name must be at least 3 characters'
    })
    @MaxLength(10, {
        message : 'your name must be at most 10 characters'
    })
    name : string

    @IsString()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsNumber()
    age: number

    @IsString()
    @IsEnum(['female', 'male'])
    @IsOptional()
    gender: string
}