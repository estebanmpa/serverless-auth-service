import { Body, Controller, Post } from "@nestjs/common";
import { LoginUseCase } from "../../application/use-cases/login.use-case.js";
import { Login } from "../../domain/dtos/login.dto.js";

@Controller('auth')
export class AuthController {
    constructor(private readonly loginUseCase: LoginUseCase) { }

    @Post("login")
    public async login(@Body() login: Login) {
        const { email, password } = login;
        return await this.loginUseCase.handle(email, password);
    }
}