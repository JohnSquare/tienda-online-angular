import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';

const routes: Routes = [
  { path: 'tabla-productos', component: TablaProductosComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
