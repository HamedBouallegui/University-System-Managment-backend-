import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalleDto } from './dto/create-salle.dto';
import { UpdateSalleDto } from './dto/update-salle.dto';
import { Salle } from './entities/salle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalleService {

constructor(
   @InjectRepository(Salle) private salleRepository:Repository<Salle>
  ){

  }


async  create(createSalleDto: CreateSalleDto) :Promise<Salle> {
      const newSalle =await this.salleRepository.create(createSalleDto)
   return this.salleRepository.save(newSalle)
  }






async  findAll():Promise<Salle[]> {
     const salle=await this.salleRepository.find()
              if(salle.length===0){
                throw new NotFoundException("data not found")
              }
              return salle
  }







async  findOne(id: number):Promise<Salle> {
   const salle =await this.salleRepository.findOneBy({id})
if(!salle){
  throw new NotFoundException("salle not found")
}
return salle
  }






 async update(id: number, updateSalleDto: UpdateSalleDto) :Promise<Salle> {
      const salle =await this.salleRepository.findOneBy({id})
if(!salle){
  throw new NotFoundException("salle not found")
}
const updatesalle= await this.salleRepository.preload({...updateSalleDto,id})
if(!updatesalle){
  throw new NotFoundException(`can not update a #${id} salle `)

}
return this.salleRepository.save(updatesalle)
  }






 async remove(id: number) {
       const salle =await this.salleRepository.findOneBy({id})
if(!salle){
  throw new NotFoundException("salle not found")
 
}
 await this.salleRepository.delete(id)
 return id
  }  
  }

