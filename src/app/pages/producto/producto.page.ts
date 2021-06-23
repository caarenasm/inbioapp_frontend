import { Component, OnInit } from '@angular/core';

export interface productos {
  
  titulo: string;
  precio: string;
  subtitulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: productos[] = [
    {
      
      titulo: 'Nombre Producto',
      precio: '$31.000',
      subtitulo: 'PageMaker.',
      descripcion: 'embellecimiento'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
