import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../mock-producto';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  productos = PRODUCTOS
  constructor() { }

  ngOnInit() {

  }

}
