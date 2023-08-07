import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit  {

  category: any;
  drink: any;
  constructor(public _cocktailService: CocktailService, private _router: Router, private _route: ActivatedRoute,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.category = this._route.snapshot.params['category'];
    this.drink = this._route.snapshot.params['category'];

    if (!this._cocktailService.cocktailObject) {
      this._snackBar.open('please select a Cocktail!', 'Ok', {
        duration: 2000
      });
      this._router.navigateByUrl(`/cocktail/list/${this.category}`);
    }
  }

}
