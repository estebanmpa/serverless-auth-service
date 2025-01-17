
import { MigrationController } from './migration.controller.js';
import { FindAll } from '../../application/use-cases/find-all.use-case.js';

describe('CatsController', () => {
    let controller: MigrationController;
    let findAllUseCase: FindAll;

    beforeEach(() => {
        findAllUseCase = new FindAll();
        controller = new MigrationController(findAllUseCase);
    });

    describe('findAll', () => {
        it('should return an array', async () => {
            const result = [];
            vitest.spyOn(findAllUseCase, 'handle').mockImplementation(async () => result);

            expect(await controller.findAll()).toBe(result);
        });
    });
});
