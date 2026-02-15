import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
     private readonly notificationRepository:Repository<Notification>,
  ){

  }


  async create(createNotificationDto: CreateNotificationDto):Promise<Notification> {
       const newnotification = await this.notificationRepository.create(createNotificationDto)
    return this.notificationRepository.save(newnotification)
    }



  async findAll():Promise<Notification[]> {
       const notification=await this.notificationRepository.find()
          if(notification.length===0){
            throw new NotFoundException("data not found")
          }
          return notification
  
        }



  async findOne(id: number):Promise<Notification> {
       const notification =await this.notificationRepository.findOneBy({id})
    if(!notification){
      throw new NotFoundException("notification not found")
    }
    return notification
      }



  async update(id: number, UpdateNotificationDto: UpdateNotificationDto):Promise<Notification> {
    const notification =await this.notificationRepository.findOneBy({id})
   if(!notification){
     throw new NotFoundException("notification not found")
   }
   const updatenotification= await this.notificationRepository.preload({...UpdateNotificationDto,id})
   if(!updatenotification){
     throw new NotFoundException(`can not update a #${id} notification`)
   
   }
   return this.notificationRepository.save(updatenotification)  }




   async remove(id: number) {
const notification =await this.notificationRepository.findOneBy({id})
if(!notification){
  throw new NotFoundException("notification not found")
 
}
 await this.notificationRepository.delete(id)
 return id
  }  
}
