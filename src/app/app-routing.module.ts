import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "autos", component: ListaAutosComponent },
  { path: "clientes", component: ClientesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
