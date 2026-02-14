import { User } from "src/user/entities/user.entity";
import { ChildEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@ChildEntity("Professeur")
export class Professeur extends User{
@PrimaryGeneratedColumn()
 id:number
@Column()
ChargeHoraireSemestrielle:string


}
