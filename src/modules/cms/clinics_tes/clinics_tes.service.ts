import { Injectable, Inject } from '@nestjs/common';
import { CLINIC_TES_REPOSITORY } from '../../../core/constants/index';
import { User } from '../../apps/users/user.entity';
import { ClinicTes } from './clinics_tes.entity';
import { ClinicTesDto } from './dto/clinics_tes.dto';

@Injectable()
export class ClinicsTesService {
    constructor(@Inject(CLINIC_TES_REPOSITORY)
    private readonly clinicTesRepository: typeof ClinicTes) { }

    async create(clinicTes: ClinicTesDto, userId): Promise<ClinicTes> {
        return await this.clinicTesRepository.create<ClinicTes>({ ...clinicTes, userId });
    }

    async findAll(): Promise<ClinicTes[]> {
        return await this.clinicTesRepository.findAll<ClinicTes>({
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async findOne(id): Promise<ClinicTes> {
        return await this.clinicTesRepository.findOne({
            where: { id },
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async delete(id, userId) {
            return await this.clinicTesRepository.destroy({
                where: { id, userId }
            });
    }

    async update(id, data, userId) {
        const [numberOfAffectedRows, [updatedClinicTes]] = await this.clinicTesRepository.update({ ...data }, { where: { id, userId }, returning: true });

        return { numberOfAffectedRows, updatedClinicTes};
    }
}