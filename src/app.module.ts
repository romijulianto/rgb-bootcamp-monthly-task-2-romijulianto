import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/apps/users/users.module';
import { AuthModule } from './modules/apps/auth/auth.module';
import { ClinicsModule } from './modules/cms/clinics/clinics.module';
import { ClinicsTesModule } from './modules/cms/clinics_tes/clinics_tes.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        UsersModule,
        AuthModule,
        ClinicsModule,
        ClinicsTesModule,
    ],
})
export class AppModule { }