import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Etudiant } from 'src/etudiant/entities/etudiant.entity';
import { Professeur } from 'src/professeur/entities/professeur.entity';
import { ChefDepartement } from 'src/chef-departement/entities/chef-departement.entity';
import { Notification } from 'src/notification/entities/notification.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Etudiant,Professeur,ChefDepartement, Notification])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
