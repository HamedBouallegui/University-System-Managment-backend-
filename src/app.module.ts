import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DepartementModule } from './departement/departement.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { ChefDepartementModule } from './chef-departement/chef-departement.module';
import { SpecialiteModule } from './specialite/specialite.module';

@Module({
  imports: [TypeOrmModule.forRoot({
type:"postgres",
host:"localhost",
port:5432,
username:"postgres",
password:"12345",
database:"projet1",
autoLoadEntities:true,
entities:[__dirname + "/**/*.entity{.ts,.js}"],
synchronize:true,

  }), UserModule, DepartementModule, EtudiantModule, ProfesseurModule, ChefDepartementModule, SpecialiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
