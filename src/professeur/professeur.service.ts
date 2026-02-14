import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Professeur } from './entities/professeur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesseurService {
constructor(
   @InjectRepository(Professeur) private professeurRepository:Repository<Professeur>
  ){

  }

 async create(createProfesseurDto: CreateProfesseurDto):Promise<Professeur> {
     const newprofesseur =await this.professeurRepository.create({...createProfesseurDto , role:"professeur"})
   return this.professeurRepository.save(newprofesseur)
  }



  async findAll():Promise<Professeur[]> {
 const professeur=await this.professeurRepository.find()
      if(professeur.length===0){
        throw new NotFoundException("data not found")
      }
      return professeur  }





async  findOne(id: number):Promise<Professeur> {
    const professeur =await this.professeurRepository.findOneBy({id})
if(!professeur){
  throw new NotFoundException("professeur not found")
}
return professeur
  }






async  update(id: number, updateProfesseurDto: UpdateProfesseurDto):Promise<Professeur>  {
    const professeur =await this.professeurRepository.findOneBy({id})
if(!professeur){
  throw new NotFoundException("professeur not found")
}
const updateprofesseur= await this.professeurRepository.preload({...updateProfesseurDto,id})
if(!updateprofesseur){
  throw new NotFoundException(`can not update a #${id} professeur`)

}
return this.professeurRepository.save(updateprofesseur)
  }





 async remove(id: number) {
const professeur =await this.professeurRepository.findOneBy({id})
if(!professeur){
  throw new NotFoundException("professeur not found")
 
}
 await this.professeurRepository.delete(id)
 return id  }
}
