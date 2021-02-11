import { IsNumber, IsString } from "class-validator";

export class CreateUserDto{

    @IsString()
    name:string;

    @IsString()
    city:string;

    @IsString()
    email:string;

    @IsNumber()
    telephone:number;
}