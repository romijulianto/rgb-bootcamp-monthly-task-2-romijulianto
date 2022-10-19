import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClinicTes as ClinicTesEntity } from './clinics_tes.entity';
import { ClinicsTesService } from './clinics_tes.service';
import { ClinicTesDto } from './dto/clinics_tes.dto';

@Controller('cms/clinics_tes')
export class ClinicsTesController {
    constructor(private readonly clinicTesService: ClinicsTesService) { }

    @Get()
    async findAll() {
        /* get all clinics_tes in the database */
        return await this.clinicTesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ClinicTesEntity> { 
        /* find the clinic_tes with id */
        const clinicTes = await this.clinicTesService.findOne(id);

        /* if the clinic doesn't exist in db, thr0w 404 */
        if (!clinicTes) {
            throw new NotFoundException('This Clinic Tes doesn\'t exist');
        }
        /* if clinic_tes exist, return clinic_tes */
        return clinicTes;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post() 
    async create(@Body() clinicTes: ClinicTesDto, @Request() req): Promise<ClinicTesEntity> {
        /* create a new clinic_tes and return the newly created clinic_tes */
        return await this.clinicTesService.create(clinicTes, req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() clinicTes: ClinicTesDto, @Request() req): Promise<ClinicTesEntity> {
        /* get the number of row affected and update clinic */
        const { numberOfAffectedRows, updatedClinicTes } = await this.clinicTesService.update(id, clinicTes, req.user.id);

        /* if the number of row affected is zero
        it means the clinic doesn't exist in our db */
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Clinic Tes doesn\'t exist');
        }

        /* return the updated clinic */
        return updatedClinicTes;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) { 
        /* delete the clinic_tes with id */
        const deleted = await this.clinicTesService.delete(id, req.user.id);

        /* if the number of row affected is zero, 
        then the clinic doesn't exist in db */
        if (deleted == 0) {
            throw new NotFoundException('This Clinic Tes doesn\'t exist');
        }

        return 'Succesfully Tes deleted';
    }
}