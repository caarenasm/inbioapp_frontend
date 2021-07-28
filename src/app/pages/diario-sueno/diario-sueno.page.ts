import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-sueno',
  templateUrl: './diario-sueno.page.html',
  styleUrls: ['./diario-sueno.page.scss'],
})
export class DiarioSuenoPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'No Pude Dormir.',
      icon: 'icon-como_duermes'
    },
    {
      id: 2,
      descripcion: 'Muy Bien y Me siento descansado.',
      icon: 'icon-como_duermes'
    },
    {
      id: 3,
      descripcion: 'Me Desperte varia Veces.',
      icon: 'icon-como_duermes'
    }
  ];

  constructor() { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

}
