import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailCategoryComponent } from './cocktail-category.component';

describe('CocktailCategoryComponent', () => {
  let component: CocktailCategoryComponent;
  let fixture: ComponentFixture<CocktailCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailCategoryComponent]
    });
    fixture = TestBed.createComponent(CocktailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
