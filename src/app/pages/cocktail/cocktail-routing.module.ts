import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailCategoryComponent } from './cocktail-category/cocktail-category.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';


const routes: Routes = [
  {
    path: '',
    component: CocktailCategoryComponent
  },
  {
    path: 'list/:category',
    component: CocktailListComponent
  },
  {
    path: 'details/:category/:drink',
    component: CocktailDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
