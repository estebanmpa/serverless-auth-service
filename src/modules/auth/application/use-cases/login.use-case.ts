import { Injectable } from "@nestjs/common";
import { GoogleSignInEmailPasswordUseCase } from "./google-sign-in-email-password.use-case.js";
import { AuthResponse } from "../../domain/entities/auth-response.entity.js";

interface UseCase {
    handle(email: string, password: string): Promise<any>;
}

@Injectable()
export class LoginUseCase implements UseCase {
    constructor(private readonly googleSignIn: GoogleSignInEmailPasswordUseCase) { }

    handle = async (email: string, password: string): Promise<AuthResponse> => {
        const token: string = await this.googleSignIn.handle(email, password);
        const response: AuthResponse = new AuthResponse(token);

        return response;
    }
}
