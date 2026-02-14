import { IsNotEmpty, isNotEmpty, IsString } from "class-validator";



export class CreateSpecialiteDto {
@IsNotEmpty()
@IsString()
code:string


@IsNotEmpty()
@IsString()
nom:string


@IsNotEmpty()
@IsString()
description:string

}
