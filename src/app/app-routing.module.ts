import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cocktail',
    pathMatch: 'full'
  },
  {
    path:'cocktail',
    loadChildren: () => import('./pages/cocktail/cocktail.module').then(m => m.CocktailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
