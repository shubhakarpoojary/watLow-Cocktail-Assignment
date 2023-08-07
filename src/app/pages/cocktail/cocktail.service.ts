import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailObject: any;
  cocktailListUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  public cocctailCategory = [
    {
      code: 'Mojito',
      name: 'Mojito',
      img: "./assets/mojito.jpg"
    },
    {
      code: 'Margarita',
      name: 'Margarita',
      img: "./assets/margarita.jpg",
    }
  ]
  constructor(private http: HttpClient) { }

  getCocktailList(category: string): Observable<any[]> {
    return this.http.get<any[]>(this.cocktailListUrl + `${category}`)
      .pipe(
        tap(data =>
          console.log('cocktail List: ' + JSON.stringify(data)))
      );
  }
}
