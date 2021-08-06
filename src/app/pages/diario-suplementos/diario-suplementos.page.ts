import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

export interface Evento {
  id: number;
  descripcion: string;
  descripcion_vita: string;
  icon: string;
}

@Component({
  selector: 'app-diario-suplementos',
  templateUrl: './diario-suplementos.page.html',
  styleUrls: ['./diario-suplementos.page.scss'],
})
export class DiarioSuplementosPage implements OnInit {

  constructor() { }

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'BELLASEN',
      descripcion_vita: 'VITAMINAS',
      icon: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'BELLASEN',
      descripcion_vita: 'VITAMINAS',
      icon: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'BELLASEN',
      descripcion_vita: 'VITAMINAS',
      icon: 'producto.png'
    }
  ];

  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

}
