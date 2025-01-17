import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./configuration.js";

@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration],
        isGlobal: true,
        //envFilePath: ['.env.local', '.env.prod']
    })]
})
export class CustomConfigModule { }