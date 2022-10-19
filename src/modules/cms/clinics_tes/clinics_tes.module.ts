import { Module } from '@nestjs/common';
import { ClinicsTesService } from './clinics_tes.service';
import { ClinicsTesController } from './clinics_tes.controller';

@Module({
  providers: [ClinicsTesService],
  controllers: [ClinicsTesController]
})
export class ClinicsTesModule {}
