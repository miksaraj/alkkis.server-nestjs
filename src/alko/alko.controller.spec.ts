import { Test, TestingModule } from '@nestjs/testing';
import { AlkoController } from './alko.controller';

describe('AlkoController', () => {
  let controller: AlkoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlkoController],
    }).compile();

    controller = module.get<AlkoController>(AlkoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
