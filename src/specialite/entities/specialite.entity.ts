import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("Specialite")
export class Specialite {
@PrimaryGeneratedColumn()
id:number

@Column()
code:string

@Column()
nom:string

@Column()
description:string

}
