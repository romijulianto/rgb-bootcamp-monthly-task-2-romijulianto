import { Module } from '@nestjs/common';
import { ClinicsTesService } from './clinics_tes.service';
import { ClinicsTesController } from './clinics_tes.controller';
import { clinicTesProviders } from './clinics_tes.providers';

@Module({
  providers: [ClinicsTesService, ...clinicTesProviders],
  controllers: [ClinicsTesController]
})
export class ClinicsTesModule {}
