import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CocktailListComponent } from './cocktail-list.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { CocktailService } from '../cocktail.service';


describe("CocktailListComponent", () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  let httpTestingController: HttpTestingController;
  var cocktailService: CocktailService;
  let baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita";


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should return data", () => {
    let result: any = [];
    cocktailService.getCocktailList('Margarita').subscribe(t => {
      result = t;
    });
    let mockResponse: any = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });

    cocktailService.getCocktailList('Margarita').subscribe(
      res => expect(res).toEqual(mockResponse, 'should return expected results'),
      fail
    );

  });


  it("should compare data", () => {
    let sampleCocktailObject: any = {
      name: "Shubhakar",
      age: "28"
    };
    component.viewCockTaiDetails(sampleCocktailObject)
    let result: any = cocktailService.cocktailObject;
    expect(result).toEqual(sampleCocktailObject, 'should compare expected results');
  });


});
