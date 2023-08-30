import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  category: any;
  cocktailList: any = [];
  tempCocktailList: any = [];
  alcohalicType: any;
  alcohalicTypeList: any = [
    {
      code: 'all',
      name: 'All'
    }, {
      code: 'alcoholic',
      name: 'Alcoholic'
    },
    {
      code: 'non-alcoholic',
      name: 'Non-Alcoholic'
    }
  ]
  constructor(private _cocktailService: CocktailService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category = this._route.snapshot.params['category'];
    this.getCocktailList(this.category);
  }

  getCocktailList(category: string) {

    this.cocktailList = this._route.snapshot.data['cocktileList'].drinks;
    this.tempCocktailList = this._route.snapshot.data['cocktileList'].drinks;
    this.alcohalicType = "all";

    //   this._cocktailService.getCocktailList(category).subscribe((result: any) => {
    //     if (result.drinks) {
    //       this.cocktailList = result.drinks;
    //       this.tempCocktailList = result.drinks;
    //       this.alcohalicType = "all";
    //     }
    //   }, (error: any) => {
    //     console.log("Error", error)
    //   })
  }

  viewCockTaiDetails(cockTail: any) {
    this._cocktailService.cocktailObject = cockTail;
    this._router.navigateByUrl(`/cocktail/details/${this.category}/${cockTail.strDrink}`);
  }

  filterList(val: string) {
    if (val === 'all') {
      this.cocktailList = this.tempCocktailList;
    }
    else {
      this.cocktailList = this.tempCocktailList.filter((item: any) => item.strAlcoholic.toLowerCase() == val);
    }

  }
}
