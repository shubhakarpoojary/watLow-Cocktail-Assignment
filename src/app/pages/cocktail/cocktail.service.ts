import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map, delay } from 'rxjs/operators';
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

 userContactsMock:any = [
    {name: 'Anna', telephone: 123},
    {name: 'Jim', telephone: 345},
    {name: 'Joana', telephone: 678},
    {name: 'Tim', telephone: 876},
    {name: 'Katty', telephone: 432}
]
  constructor(private http: HttpClient) { }

   getCocktailList(category: string): Observable<any[]> {

      return this.http.get<any[]>(this.cocktailListUrl + `${category}`);
  }

  getUsers(): Observable<any> {
    return this.userContactsMock;
   // return this.http.get(this.url).pipe(delay(2000));
  }


}
