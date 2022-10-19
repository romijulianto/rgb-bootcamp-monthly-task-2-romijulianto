import { ClinicTes } from '../clinics_tes/clinics_tes.entity';
import { CLINIC_TES_REPOSITORY } from '../../../core/constants/index';

export const clinicTesProviders = [{
    provide: CLINIC_TES_REPOSITORY,
    useValue: ClinicTes,
}];