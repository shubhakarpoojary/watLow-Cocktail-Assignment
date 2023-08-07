import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailCategoryComponent } from './cocktail-category/cocktail-category.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailRoutingModule } from './cocktail-routing.module';


import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    CocktailCategoryComponent,
    CocktailListComponent,
    CocktailDetailsComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [CocktailService]
})
export class CocktailModule { }