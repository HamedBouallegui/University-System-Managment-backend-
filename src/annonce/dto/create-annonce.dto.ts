import { IsNotEmpty, IsString } from "class-validator";

export class CreateAnnonceDto {

@IsNotEmpty()
@IsString()
   title:string
  
@IsNotEmpty()
@IsString()
contenu:string

@IsNotEmpty()
@IsString()
datePublication:string

@IsNotEmpty()
@IsString()
cibleRole:string

@IsNotEmpty()
@IsString()
cibleDepartement:string
}
