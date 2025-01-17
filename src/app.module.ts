import { Module } from '@nestjs/common';
import { CustomConfigModule } from './common/config/custom-config.module.js';
import { AuthModule } from './modules/auth/auth.module.js';

@Module({
  imports: [
    CustomConfigModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
