import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-deporte',
  templateUrl: './diario-deporte.page.html',
  styleUrls: ['./diario-deporte.page.scss'],
})
export class DiarioDeportePage implements OnInit {

  slideOptsDos = {
    slidesPerView: 4.6,
    freeMode: true
  };

  datos: FormGroup;
  distancia = 0;
  energia = 0;
  fatiga = 0;

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'Nadar',
      icon: 'icon-nadar'
    },
    {
      id: 2,
      descripcion: 'Correr',
      icon: 'icon-correr'
    },
    {
      id: 3,
      descripcion: 'Pesas',
      icon: 'icon-pesas'
    },
    {
      id: 4,
      descripcion: 'Aerobicos',
      icon: 'icon-aerobicos'
    },
    {
      id: 5,
      descripcion: 'Yoga',
      icon: 'icon-yoga'
    },
    {
      id: 6,
      descripcion: 'Bicicleta',
      icon: 'icon-yoga'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
  ) { 
    this.datos = this.formBuilder.group({
      tipo: [ 2, Validators.required],
      opcion: ['', Validators.required],
      tiempo: ['', Validators.required],
      lectura: ['', ],
    });
  }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  masEnergia() {
    if( this.energia <= 1){
      const valor = 0.1;
      this.energia = valor + this.energia;
    }
  }

  menosEnergia() {
    if( this.energia >= 0){
      const valor: any = parseFloat('0.1').toFixed(2);
      this.energia = this.energia - valor;
    }
  }

  masFatiga() {
    if( this.fatiga < 100){
      const valor = 10;
      this.fatiga = valor + this.fatiga;
    }
  }

  menosFatiga() {
    if( this.fatiga > 0){
      const valor: any = 10;
      this.fatiga = this.fatiga - valor;
    }
  }

  masDistancia() {
    const valor = 0.1;
    this.distancia = valor + this.distancia;
  }

  menosDistancia() {
    if( this.distancia >= 0){
      const valor: any = parseFloat('0.1').toFixed(2);
      this.distancia = this.distancia - valor;
    }
  }

}
