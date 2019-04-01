import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  producto: Producto = {
    id: null, nombre: null, descripcion: null, precio: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.productosService.getProducto(id).subscribe(
      (producto: Producto) => this.producto = producto
    );
  }
  guardarProducto(): void {
    if(this.producto.id) {
      this.productosService.putProducto(this.producto).subscribe(
        () => this.router.navigate([''])
      );
    } else {
      this.productosService.postProducto(this.producto).subscribe(
        () => this.router.navigate([''])
      );
    }
  }
}
