import { IsNotEmpty, IsString } from "class-validator";

export class CreateSemestreDto {


@IsNotEmpty()
@IsString()
code:string



}
