import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Location } from '@angular/common';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-agua',
  templateUrl: './diario-agua.page.html',
  styleUrls: ['./diario-agua.page.scss'],
})
export class DiarioAguaPage implements OnInit {

vaso = 0;
menosVasoDisabled = false;

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

constructor(
  private location: Location
) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  masVaso() {
    if( this.vaso >= 0){
      this.menosVasoDisabled = false;
    }
    this.vaso += 1;
  }

  menosVaso() {

    if( this.vaso < 1){
      this.menosVasoDisabled = true;
      return;
    }else{
      this.menosVasoDisabled = false;
    }

    this.vaso -= 1;
  }

  counter(i: number) {
    return new Array(i);
  }

  cerrar() {
    this.location.back();
  }

}
