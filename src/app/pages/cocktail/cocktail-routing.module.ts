import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailCategoryComponent } from './cocktail-category/cocktail-category.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { cocktileListResolver } from './cocktail-list.reolve';


const routes: Routes = [
  {
    path: '',
    component: CocktailCategoryComponent
  },
  {
    path: 'list/:category',
    component: CocktailListComponent,
    resolve: { cocktileList: cocktileListResolver },

  },
  {
    path: 'details/:category/:drink',
    component: CocktailDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
