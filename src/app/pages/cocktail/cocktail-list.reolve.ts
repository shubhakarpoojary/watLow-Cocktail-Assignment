import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {delay, Observable, of} from "rxjs";
import { CocktailService } from "./cocktail.service";



const userContactsMock = [
    {name: 'Anna', telephone: 123},
    {name: 'Jim', telephone: 345},
    {name: 'Joana', telephone: 678},
    {name: 'Tim', telephone: 876},
    {name: 'Katty', telephone: 432}
]

@Injectable({
    providedIn: 'root',
})

export class cocktileListResolver implements Resolve<any[]> {
    constructor(private cockServcice:CocktailService) {}

    // resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    //     // We just mock user information in the resolver used a delay operator
    //     // to simulate asynchronous HTTP requests from the service.
    //     return of(userContactsMock).pipe(delay(1000));
    // }


    resolve(route: ActivatedRouteSnapshot): Observable<any[]> {

      return this.cockServcice.getCocktailList(route.params['category']);
    }

}
