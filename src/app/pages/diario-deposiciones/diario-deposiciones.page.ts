import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

export interface Evento {
  id: number;
  descripcion: string;
  descripcion_vita: string;
  icon: string;
}

@Component({
  selector: 'app-diario-deposiciones',
  templateUrl: './diario-deposiciones.page.html',
  styleUrls: ['./diario-deposiciones.page.scss'],
})
export class DiarioDeposicionesPage implements OnInit {

  constructor() { }

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'PURIFIB',
      descripcion_vita: 'Medicamentos',
      icon: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'PURIFIB',
      descripcion_vita: 'Medicamentos',
      icon: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'PURIFIB',
      descripcion_vita: 'Medicamentos',
      icon: 'producto.png'
    }
  ];

  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

}
