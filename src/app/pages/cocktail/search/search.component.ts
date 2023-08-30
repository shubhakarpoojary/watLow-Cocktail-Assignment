import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  timeOb: number = 1;
  timePr: number = 1;
  subscription: any;
  observer = new Observable(subscribe => {
    setInterval(() => {
      subscribe.next(this.timeOb++);
    }, 1000)
  });

  myPromise = new Promise(resolve => {
    setInterval(() => {
      resolve(this.timePr++);
    }, 1000);
  });
  constructor() {

  }
  ngOnInit(): void {
    this.subscription = this.observer.subscribe((res: any) => {
      console.log("observale", res);

      if (res == 5) {
        this.subscription.unsubscribe();
      }
    });


    this.myPromise.then(res => {
      console.log("promises", res);
    })

    this.functionCalaculate()
    this.factoial(5);
  }

  getName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }


  getNamearr = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`
  }


  functionCalaculate() {
    let x = 10;
    if (x == 10) {
      let x = 20;
      console.log('block Scope', x); //prints 20
    }
    console.log('block Scope', x);


    var x1 = 10;
    if (x1 == 10) {
      var x1 = 20;
      console.log('function Scope', x1);
    }
    console.log('function Scope', x1);



    const myName = 'John';


    console.log('const', myName);
  }




  fcatoialOutput: number = 1;
  factoial = (n: number) => {
    this.fcatoialOutput=this.fcatoialOutput * n;
    if (n != 1) {
      n = n - 1;
      this.factoial(n);
    }
    else {
      console.log("Factorial", this.fcatoialOutput);
    }
  }


}
