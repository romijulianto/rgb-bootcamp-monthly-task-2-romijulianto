import { Module } from '@nestjs/common';
import { ClinicsTesService } from './clinics_tes.service';

@Module({
  providers: [ClinicsTesService]
})
export class ClinicsTesModule {}
