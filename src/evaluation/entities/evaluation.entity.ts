import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum EvaluationType {
    CC= "CC",
    DS= "DS",
    EXAMEN= "EXAMEN",
    PROJECT= "PROJECT",
    RATTRAPAGE= "RATTRAPAGE",
}
@Entity()
export class Evaluation {
@PrimaryGeneratedColumn()   
id:number;

@Column({type: "enum",
enum: EvaluationType,})


@Column()
date:Date;

@Column()
coefficient:number;

@Column()
matiere:string;

@Column()
semestre:string;
}

