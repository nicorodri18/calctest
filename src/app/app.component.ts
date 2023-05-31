import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentOperand: string = ''; // Variable que almacena el operando actual
  history: string[] = []; // Arreglo que almacena el historial de cálculos

  calculator: string[][] = [
    ['7', '8', '9', '/'], // Fila 1 de botones
    ['4', '5', '6', '*'], // Fila 2 de botones
    ['1', '2', '3', '-'], // Fila 3 de botones
    ['0', '.', '=', '+']  // Fila 4 de botones
  ]; // Matriz que define los botones de la calculadora

  handleButtonClick(button: string): void {
    if (button === '=') {
      this.calculateResult(); // Si se presiona el botón "=", se calcula el resultado
    } else {
      this.currentOperand += button; // Se concatena el botón presionado al operando actual
    }
  }

  calculateResult(): void {
    try {
      const result = eval(this.currentOperand); // Se evalúa la expresión del operando actual
      this.history.push(this.currentOperand + ' = ' + result); // Se agrega la expresión y el resultado al historial
      this.currentOperand = String(result); // Se actualiza el operando actual con el resultado calculado
    } catch (error: any) {
      this.history.push('Error: ' + error); // Si ocurre un error durante la evaluación, se agrega un mensaje de error al historial
    }
  }

  clearDisplay(): void {
    this.currentOperand = ''; // Función para borrar el contenido del operando actual
  }

  getButtonClass(button: string): string[] {
    return [
      'button',
      button === '=' ? 'equal' : '', // Si el botón es "=", se le agrega la clase "equal"
      button === '0' ? 'zero' : '', // Si el botón es "0", se le agrega la clase "zero"
      ['/', '*', '-', '+'].includes(button) ? 'operator' : '' // Si el botón es un operador, se le agrega la clase "operator"
    ];
  }
}
