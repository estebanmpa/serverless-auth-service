import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

@Injectable()
export class GoogleSignInEmailPasswordUseCase {
    constructor(private readonly config: ConfigService) { }

    /**
     * Signs In using Google Api Key
     * @param email 
     * @param password 
     * @returns Google auth token for the user
     */
    handle = async (email: string, password: string): Promise<string> => {
        const apiKey: string = this.config.get<string>("google.apiKey");
        const url: string = this.config.get<string>("google.apiAuthUrl").replace("<key>", apiKey);

        try {
            const response = await axios.post(url, { email, password, returnSecureToken: true });

            return response.data.idToken;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}