import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { Seance } from './entities/seance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeanceService {


constructor(
   @InjectRepository(Seance) private seanceRepository:Repository<Seance>
  ){

  }



async  create(createSeanceDto: CreateSeanceDto):Promise<Seance> {
     const newseance =await this.seanceRepository.create(createSeanceDto)
   return this.seanceRepository.save(newseance)
  }





 async findAll():Promise<Seance[]> {

    const seance=await this.seanceRepository.find()
                 if(seance.length===0){
                   throw new NotFoundException("data not found")
                 }
                 return seance
  }





async  findOne(id: number) :Promise<Seance> {
      const seance =await this.seanceRepository.findOneBy({id})
if(!seance){
  throw new NotFoundException("seance not found")
}
return seance
  }







async  update(id: number, updateSeanceDto: UpdateSeanceDto):Promise<Seance> {
      const seance =await this.seanceRepository.findOneBy({id})
if(!seance){
  throw new NotFoundException("seance not found")
}
const updateseance= await this.seanceRepository.preload({...updateSeanceDto,id})
if(!updateseance){
  throw new NotFoundException(`can not update a #${id} seance `)

}
return this.seanceRepository.save(updateseance)
  }







async  remove(id: number) {
      const seance =await this.seanceRepository.findOneBy({id})
if(!seance){
  throw new NotFoundException("seance not found")
 
}
 await this.seanceRepository.delete(id)
 return id
  }
}
