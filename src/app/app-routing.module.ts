import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; // Define una matriz vacía para las rutas del enrutador

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa el módulo RouterModule y configura las rutas principales utilizando el método forRoot()
  exports: [RouterModule] // Exporta el módulo RouterModule para que esté disponible en otros módulos de la aplicación
})
export class AppRoutingModule { }
