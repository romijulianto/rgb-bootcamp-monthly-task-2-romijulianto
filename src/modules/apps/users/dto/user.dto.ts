import { IsNotEmpty, MinLength, IsEmail, IsEnum, IsDate } from 'class-validator';

enum Gender {
    LAKI_LAKI = 'Laki-laki',
    PEREMPUAN = 'Perempuan',
}
export class UserDto {
    @IsNotEmpty()
    readonly nik: string;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly phone: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsDate()
    readonly birth_date: Date;

    @IsNotEmpty()
    @IsEnum(Gender, {
        message: 'Jenis Kelamin adalah Laki-laki/Perempuan',
    })
    readonly gender: string;

    @IsNotEmpty()
    readonly address: string;
}