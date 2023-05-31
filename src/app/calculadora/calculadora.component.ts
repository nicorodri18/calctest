import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora', // Selector del componente utilizado en el archivo HTML
  templateUrl: './calculadora.component.html', // Ruta al archivo HTML del componente
  styleUrls: ['./calculadora.component.css'] // Ruta al archivo de estilos CSS del componente
})
export class CalculadoraComponent {
  displayValue: string = ''; // Valor actual que se muestra en la pantalla de la calculadora

  handleButtonClick(value: string) {
    this.displayValue += value; // Método para manejar el evento de clic en un botón y agregar su valor al displayValue
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue); // Método para realizar el cálculo del valor actual y actualizar el displayValue
    } catch (error) {
      this.displayValue = 'Error'; // En caso de que ocurra un error durante el cálculo, se muestra 'Error' en el displayValue
    }
  }

  clear() {
    this.displayValue = ''; // Método para borrar el contenido del displayValue y reiniciar la calculadora
  }
}
