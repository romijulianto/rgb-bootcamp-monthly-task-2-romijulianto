import { Test, TestingModule } from '@nestjs/testing';
import { ClinicsTesService } from './clinics_tes.service';

describe('ClinicsTesService', () => {
  let service: ClinicsTesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicsTesService],
    }).compile();

    service = module.get<ClinicsTesService>(ClinicsTesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
