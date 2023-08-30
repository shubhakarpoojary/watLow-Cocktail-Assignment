import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, computed, signal } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Router } from '@angular/router';
import { HellloComponent } from '../helllo/helllo.component';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-cocktail-category',
  templateUrl: './cocktail-category.component.html',
  styleUrls: ['./cocktail-category.component.css']
})
export class CocktailCategoryComponent implements OnInit {
  @ViewChild('template', {read: ViewContainerRef}) viewTemplate!: ViewContainerRef;
  categoryList: any = [];

  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor(private _cocktailService: CocktailService, private _route: Router,
    private cfr: ComponentFactoryResolver) {

  }
  ngOnInit(): void {
    this.categoryList = this._cocktailService.cocctailCategory;

  }

  viewCockTailList(category: string) {
    this._route.navigateByUrl(`/cocktail/list/${category}`);
  }

  loadhelloComponent() {
    this.viewTemplate.clear();
    this.viewTemplate.createComponent(this.cfr.resolveComponentFactory(HellloComponent));
   }

   loadNewComponent() {
    this.viewTemplate.clear();
    this.viewTemplate.createComponent(this.cfr.resolveComponentFactory(NewComponent));
   }

   setName(newName: string) {
    this.firstName.set(newName);
  }

  moveTostandAlone(){
    this._route.navigateByUrl(`/standalone/serach`);
  }
}
