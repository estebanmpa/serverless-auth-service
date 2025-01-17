import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/controllers/auth.controller.js';
import { GoogleSignInEmailPasswordUseCase, LoginUseCase } from './application/use-cases/index.js';

const useCases = [LoginUseCase, GoogleSignInEmailPasswordUseCase]

@Module({
  controllers: [AuthController],
  imports: [],
  providers: [...useCases]
})
export class AuthModule { }
