import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabla-productos', pathMatch: 'full' },
  { path: 'tabla-productos', component: TablaProductosComponent }, 
  { path: 'formulario', component: FormularioComponent },
  { path: 'editar/:id', component: FormularioComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
