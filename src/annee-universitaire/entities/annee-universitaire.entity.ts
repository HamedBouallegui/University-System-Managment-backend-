import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AnneeUniversitaire {

@PrimaryGeneratedColumn()
 id:number

@Column()
code:string

@Column()
dateDebut:Date

@Column()
dateFin:Date
@Column()
estEnCours:boolean


}
