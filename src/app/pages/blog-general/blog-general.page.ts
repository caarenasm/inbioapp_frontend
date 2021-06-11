import { Component, OnInit } from '@angular/core';

export interface Blogs {
  img: string; 
  fecha: string; 
  titulo: string;
} 

@Component({
  selector: 'app-blog-general',
  templateUrl: './blog-general.page.html',
  styleUrls: ['./blog-general.page.scss'],
})
export class BlogGeneralPage implements OnInit {

  blog: Blogs[] = [
    {
      img: 'assets/img/producto.png',
      fecha: '23/04/2021',
      titulo: 'Título Artículo', 
    },
    {
      img: 'assets/img/producto.png',
      fecha: '23/04/2021',
      titulo: 'Título Artículo', 
    },
    {
      img: 'assets/img/producto.png',
      fecha: '23/04/2021',
      titulo: 'Título Artículo', 
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
