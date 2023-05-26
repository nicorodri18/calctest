import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  matrix: string[][] = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ];
  resultado: number = 0;
  displayValue: string = '';
  history: string[] = [];

  handleButtonClick(button: string) {
    if (button === '=') {
      this.calculateResult();
    } else {
      this.displayValue += button;
    }
  }

  calculateResult() {
    try {
      this.resultado = eval(this.displayValue);
      this.history.push(this.displayValue + ' = ' + this.resultado);
    } catch (error) {
      console.error('Error de cálculo:', error);
    }
  }

  clearDisplay() {
    this.displayValue = '';
  }
}
