import { Controller, Get } from "@nestjs/common";
import { FindAll } from "../../application/use-cases/find-all.use-case.js";

@Controller('migration')
export class MigrationController {
    constructor(private readonly findAllUseCase: FindAll) { }

    @Get()
    public findAll() {
        return this.findAllUseCase.handle();
    }
}