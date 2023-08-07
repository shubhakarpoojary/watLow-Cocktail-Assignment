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
  constructor(private _cocktailService: CocktailService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category = this._route.snapshot.params['category'];
    this.getCocktailList(this.category);
  }

  getCocktailList(category: string) {
    this._cocktailService.getCocktailList(category).subscribe((result: any) => {
      if (result.drinks) {
        this.cocktailList = result.drinks;
      }
    }, error => {
      console.log("Error", error)
    })
  }

  viewCockTaiDetails(cockTail: any) {
    this._cocktailService.cocktailObject = cockTail;
    this._router.navigateByUrl(`/cocktail/details/${this.category}/${cockTail.strDrink}`);
  }
}
