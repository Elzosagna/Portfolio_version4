import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, ActivatedRoute, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealisationPage } from './realisation.page';
import { DetailsPage } from '../details/details.page';


const routes: Routes = [
  {
    path: '',
    component: RealisationPage
  }
  //Chemin de Recupération de l'id d'un projet

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RealisationPage]
})
export class RealisationPageModule {}
