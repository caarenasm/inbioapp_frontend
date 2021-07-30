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

  slideOpts = {
    slidesPerView: 2,
    freeMode: true
  };

  datos: FormGroup;

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

}
