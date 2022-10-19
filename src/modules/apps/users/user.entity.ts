import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nik: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    no_telephone: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    birth_date: Date;

    @Column({
        type: DataType.ENUM,
        values: ['Laki-laki', 'Perempuan'],
        allowNull: false,
    })
    gender: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;
}