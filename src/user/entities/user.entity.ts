import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import * as argon2 from 'argon2'

@Entity("user")
@TableInheritance({column:{type:"varchar", name:"role"}})
export class User extends BaseEntity {
@PrimaryGeneratedColumn()
id:number

@Column()
fullname:string
@Column()
email:string
@Column()
password:string
@Column()
role:string
@BeforeInsert()
@BeforeUpdate()
async hashPassword(){
    if(this.password&& ! this.password.startsWith("$argon2")){
        this.password=await argon2.hash(this.password);
    }
}


}
