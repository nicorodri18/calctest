import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    // Crea un componente de prueba para AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Comprueba que el componente se haya creado correctamente
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculadora'`, () => {
    // Crea un componente de prueba para AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Comprueba que el título del componente sea 'calculadora'
    expect(app.title).toEqual('calculadora');
  });

  it('should render title', () => {
    // Crea un componente de prueba para AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Comprueba que el título se esté mostrando correctamente en el HTML renderizado
    expect(compiled.querySelector('.content span')?.textContent).toContain('calculadora app is running!');
  });
});
