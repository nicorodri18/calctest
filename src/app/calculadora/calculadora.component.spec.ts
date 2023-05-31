import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent] // Declaración del componente CalculadoraComponent en el entorno de pruebas
    });
    fixture = TestBed.createComponent(CalculadoraComponent); // Creación del componente CalculadoraComponent
    component = fixture.componentInstance; // Obtención de la instancia del componente CalculadoraComponent
    fixture.detectChanges(); // Detectar cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar que el componente se haya creado correctamente
  });
});
