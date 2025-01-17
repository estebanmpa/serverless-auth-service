import { Injectable } from "@nestjs/common";

abstract class UseCase {
    abstract handle(): Promise<any>;
}

@Injectable()
export class FindAll implements UseCase {
    handle = async (): Promise<any> => {
        return [];
    }
}