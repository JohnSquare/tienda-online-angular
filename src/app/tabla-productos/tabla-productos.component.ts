import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service'
import { Producto } from '../producto';


//Esta importación ya no es necesaria porque empezamos a usar un servicio.
//import { PRODUCTOS } from '../mock-producto';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})

export class TablaProductosComponent implements OnInit {
   
  constructor(private productosService: ProductosService) { }
  producto: Producto[];
  ngOnInit() {    
    this.productosService.getProductos().subscribe(
      (productos: Producto[]) => this.producto = productos
    );
  }

}
