import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-deposiciones-detalles',
  templateUrl: './diario-deposiciones-detalles.page.html',
  styleUrls: ['./diario-deposiciones-detalles.page.scss'],
})
export class DiarioDeposicionesDetallesPage implements OnInit {

  constructor() { }

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'Heces duras y separadas', 
      icon: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'Heces duras y separadas',
      icon: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'Heces duras y separadas',
      icon: 'producto.png'
    }
  ];

  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

}
