import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
export enum SeanceType{
    TD="TD",
    TP="TP",
    COURS="COURS",
    EXAMEN="EXAMEN",    
    RATTRAPAGE="RATTRAPAGE",
}

export class CreateSeanceDto {



@IsNotEmpty()
type:SeanceType


@Type(() => Date)
@IsNotEmpty()
@IsDate()
date:Date



@IsNotEmpty()
@IsString()
heureDebut:string

@IsNotEmpty()
@IsString()
heureFin:string

@IsNotEmpty()
@IsString()
groupe:string

}
