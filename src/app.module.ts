import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DepartementModule } from './departement/departement.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { ChefDepartementModule } from './chef-departement/chef-departement.module';
import { AnnonceModule } from './annonce/annonce.module';
import { SalleModule } from './salle/salle.module';
import { SeanceModule } from './seance/seance.module';
import { AnneeUniversitaireModule } from './annee-universitaire/annee-universitaire.module';
import { SemestreModule } from './semestre/semestre.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { NotificationModule } from './notification/notification.module';

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

  }), UserModule, DepartementModule, EtudiantModule, ProfesseurModule, ChefDepartementModule, AnnonceModule, SalleModule, SeanceModule, AnneeUniversitaireModule, SemestreModule, EvaluationModule , NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
