import { Clinic } from "./clinics.entity";
import { CLINIC_REPOSITORY } from '../../../core/constants/index';

export const clinicsProviders = [{
    provide: CLINIC_REPOSITORY,
    useValue: Clinic,
}]