import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { DiarioSuenoPage } from '../diario-sueno/diario-sueno.page';

export interface Habitos {
  id: number;
  tipo: number;
  icono: string;
  descripcion: string;
  estado: number;
  url: string;
}

export interface Animo {
  id: number;
  icono: string;
  descripcion: string;
}

@Component({
  selector: 'app-diario-nutricional-pregunta',
  templateUrl: './diario-nutricional-pregunta.page.html',
  styleUrls: ['./diario-nutricional-pregunta.page.scss'],
})
export class DiarioNutricionalPreguntaPage implements OnInit {

  fecha: any;

  animo: Animo[] = [
    {
      id: 1,
      icono: 'icon-feliz',
      descripcion: 'Feliz',
    },
    {
      id: 2,
      icono: 'icon-triste',
      descripcion: 'Triste',
    },
    {
      id: 3,
      icono: 'icon-neutro',
      descripcion: 'Normal',
    }
  ];

  habito: Habitos[] = [
    {
      id: 1,
      tipo: 1,
      icono: 'icon-mejorar_sueno_02',
      descripcion: '¿Como Dormiste?',
      estado: 1,
      url: 'diario-sueno'
    },
    {
      id: 2,
      tipo: 1,
      icono: 'icon-pesa',
      descripcion: '¿Cuanto pesaste?',
      estado: 2,
      url: 'diario-sueno'
    },
    {
      id: 3,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Que actividad(es) físicas practicastes',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 4,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Que comiste?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 5,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Te causo incomodidad algun alimento ingerido?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 6,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Cuantos vasos de agua te tomaste al dia?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 7,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Ingeriste suplementos?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 8,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Cuantas y como fueron tus deposiciones?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 9,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Tienes ahora alguna(s) enfermeda(des) estacional(es)?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 10,
      tipo: 1,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Te pasa algo adicional?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 11,
      tipo: 2,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Que medicamentos tomaste?',
      estado: 3,
      url: 'diario-deporte'
    },
    {
      id: 12,
      tipo: 2,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Como regulas tu enfermedad?',
      estado: 3,
      url: 'diario-deporte'
    }
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.fecha = this.router.getCurrentNavigation().extras.state.fecha;
      }
    });
  }

  async mostrarPregunta( ruta, info?) {

    const navigationExtras: NavigationExtras = { state: { datos: info } };
    this.router.navigate([ruta], navigationExtras);

    /*const modal = await this.modalCtrl.create({
      component: DiarioSuenoPage,
      componentProps: {}
    });

    return await modal.present();*/

  }

}
