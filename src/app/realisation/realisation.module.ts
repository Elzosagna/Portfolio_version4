import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, ActivatedRoute, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealisationPage } from './realisation.page';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: RealisationPage
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RealisationPage, DetailsComponent]
})
export class RealisationPageModule {}
