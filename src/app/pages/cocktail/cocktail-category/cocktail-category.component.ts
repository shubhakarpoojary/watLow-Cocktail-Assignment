import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-category',
  templateUrl: './cocktail-category.component.html',
  styleUrls: ['./cocktail-category.component.css']
})
export class CocktailCategoryComponent implements OnInit {

  categoryList: any = [];
  constructor(private _cocktailService: CocktailService, private _route: Router) {

  }
  ngOnInit(): void {
    this.categoryList = this._cocktailService.cocctailCategory;

  }

  viewCockTailList(category: string) {
    this._route.navigateByUrl(`/cocktail/list/${category}`);
  }

}
