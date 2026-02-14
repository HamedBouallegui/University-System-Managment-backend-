import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("annonce")
export class Annonce {
@PrimaryGeneratedColumn()
 id:number

@Column()
 title:string
@Column()
 contenu:string 
@Column()
 datePublication:string
@Column()
 cibleRole:string
@Column()
 cibleDepartement:string



}
