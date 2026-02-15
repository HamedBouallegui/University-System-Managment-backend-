import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EvaluationType } from "../entities/evaluation.entity";

export class CreateEvaluationDto {
    @IsEnum(EvaluationType)
    type: EvaluationType;

    @IsString()
    @IsNotEmpty()
    matiere: string;

    @IsString()
    @IsNotEmpty()
    semestre: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    coefficient: number;



}
