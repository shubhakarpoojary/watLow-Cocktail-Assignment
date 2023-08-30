import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './app-custom-reloader';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cocktail',
    pathMatch: 'full'
  },
  {
    path: 'cocktail',
    loadChildren: () => import('./pages/cocktail/cocktail.module').then(m => m.CocktailModule),
    data: { preload: true }
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
  },

  {
    path: 'standalone/serach',
    loadComponent: () => import('./pages/cocktail/search/search.component').then(m => m.SearchComponent),
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
