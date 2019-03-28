import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://localhost:3000/productos'; 

  constructor(private http: HttpClient) { }
  
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }	  
}

