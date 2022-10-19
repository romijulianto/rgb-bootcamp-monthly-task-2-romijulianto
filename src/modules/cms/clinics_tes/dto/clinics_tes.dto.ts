import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class ClinicTesDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly tes_name: string;

    @IsNotEmpty()
    @MaxLength(100)
    readonly description: string;

    @IsNotEmpty()
    @MinLength(5)
    readonly price: number;
}