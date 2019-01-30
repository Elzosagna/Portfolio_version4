import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'realisation',
    loadChildren: './realisation/realisation.module#RealisationPageModule'
  },
  { path: 'article',
    loadChildren: './article/article.module#ArticlePageModule'
  },
  { path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
