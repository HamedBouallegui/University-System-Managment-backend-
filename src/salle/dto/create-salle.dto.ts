import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSalleDto {
@IsNotEmpty()
@IsString()
code:string

@IsNotEmpty()
@IsNumber()
capacite:number
 
@IsNotEmpty()
@IsString()
batiement:string


@IsNotEmpty()
@IsString()
equipement:string

}
