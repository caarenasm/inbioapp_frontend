import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

export interface Evento {
  id: number;
  descripcion: string;
  descripcion_vita: string;
  icon: string;
}

@Component({
  selector: 'app-diario-enfermedades-estacionales',
  templateUrl: './diario-enfermedades-estacionales.page.html',
  styleUrls: ['./diario-enfermedades-estacionales.page.scss'],
})
export class DiarioEnfermedadesEstacionalesPage implements OnInit {

  constructor() { }

 slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'Dolor abdominal',
      descripcion_vita: 'Dolor de cabeza',
      icon: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'Dolor abdominal',
      descripcion_vita: 'Dolor de cabeza',
      icon: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'Dolor abdominal',
      descripcion_vita: 'Dolor de cabeza',
      icon: 'producto.png'
    }
  ];

  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

}
