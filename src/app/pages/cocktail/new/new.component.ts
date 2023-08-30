import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  displayValue = '';

  appendToDisplay(value: string): void {
    this.displayValue += value;
  }

  clearDisplay(): void {
    this.displayValue = '';
  }

  calculate(): void {
    try {
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }
}
