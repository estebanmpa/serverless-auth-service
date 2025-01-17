import { IsEmail, IsNotEmpty } from "class-validator";

export class Login {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}