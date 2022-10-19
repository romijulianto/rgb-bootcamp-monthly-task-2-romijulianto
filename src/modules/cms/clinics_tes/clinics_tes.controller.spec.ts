import { Test, TestingModule } from '@nestjs/testing';
import { ClinicsTesController } from './clinics_tes.controller';

describe('ClinicsTesController', () => {
  let controller: ClinicsTesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicsTesController],
    }).compile();

    controller = module.get<ClinicsTesController>(ClinicsTesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
