import { Component, OnInit } from '@angular/core';

export interface Blogs {
   
  titulo: string; 
  texto: string;
}

@Component({
  selector: 'app-blog-unico',
  templateUrl: './blog-unico.page.html',
  styleUrls: ['./blog-unico.page.scss'],
})
export class BlogUnicoPage implements OnInit {

  blog: Blogs[] = [
    {
      
      titulo: 'Título Artículo',
      texto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker.',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}