import { Module } from '@nestjs/common';
import { MigrationController } from './infrastructure/controllers/migration.controller.js';
import { FindAll } from './application/use-cases/find-all.use-case.js';

const useCases = [FindAll]

@Module({
  controllers: [MigrationController],
  imports: [],
  providers: [...useCases]
})
export class MigrationModule { }
