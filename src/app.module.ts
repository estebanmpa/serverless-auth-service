import { Module } from '@nestjs/common';
import { MigrationModule } from './modules/migration/migration.module.js';
import { CustomConfigModule } from './common/config/custom-config.module.js';

@Module({
  imports: [
    CustomConfigModule,
    MigrationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
