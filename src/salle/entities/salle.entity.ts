import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("salle")
export class Salle {
@PrimaryGeneratedColumn()
 id:number

 @Column()
 code:string
    @Column()   
    capacite:number
    @Column()
    batiement:string
    @Column()
    equipement:string

}
