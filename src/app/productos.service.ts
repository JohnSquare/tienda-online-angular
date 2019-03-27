import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTOS } from './mock-producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor() { }
  getProducto():Producto[]{    
    return PRODUCTOS;
  }
}

