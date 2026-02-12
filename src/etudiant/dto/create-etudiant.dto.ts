import { IsNotEmpty, IsOptional, IsString } from "class-validator"
import { CreateUserDto } from "src/user/dto/create-user.dto"

export class CreateEtudiantDto extends CreateUserDto {

@IsNotEmpty()
@IsString()
   matricule:string

@IsNotEmpty()
 @IsString()
 niveau:string



 
 @IsString()
  @IsOptional()

photo?:string


}
