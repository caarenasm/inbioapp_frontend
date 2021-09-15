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
      icono: 'icon-irritable',
      descripcion: 'Irritable',
    },
    {
      id: 2,
      icono: 'icon-feliz',
      descripcion: 'Feliz',
    },
    {
      id: 3,
      icono: 'icon-energetico',
      descripcion: 'Energetico',
    },
    {
      id: 4,
      icono: 'icon-asustado',
      descripcion: 'Asustado',
    },
    {
      id: 5,
      icono: 'icon-triste',
      descripcion: 'Triste',
    },
    {
      id: 6,
      icono: 'icon-hambre',
      descripcion: 'Ansioso',
    },
    {
      id: 7,
      icono: 'icon-nauseas',
      descripcion: 'Depresivo',
    },
    {
      id: 8,
      icono: 'icon-culpa',
      descripcion: 'Culpa',
    },
    {
      id: 9,
      icono: 'icon-pensamientos-obsesivos',
      descripcion: 'Pensamientos obsesivos',
    },
    {
      id: 10,
      icono: 'icon-ira',
      descripcion: 'Ira',
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
      url: ''
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
      icono: 'icon-comida-04',
      descripcion: '¿Que comiste?',
      estado: 3,
      url: ''
    },
    {
      id: 5,
      tipo: 1,
      icono: 'icon-incomodidad-05',
      descripcion: '¿Te causo incomodidad algun alimento ingerido?',
      estado: 3,
      url: ''
    },
    {
      id: 6,
      tipo: 1,
      icono: 'icon-agua01',
      descripcion: '¿Cuantos vasos de agua te tomaste al dia?',
      estado: 3,
      url: 'diario-agua'
    },
    {
      id: 7,
      tipo: 1,
      icono: 'icon-suplementos',
      descripcion: '¿Ingeriste suplementos?',
      estado: 3,
      url: 'diario-suplementos'
    },
    {
      id: 8,
      tipo: 1,
      icono: 'icon-deposiciones-03',
      descripcion: '¿Cuantas y como fueron tus deposiciones?',
      estado: 3,
      url: 'diario-deposiciones'
    },
    {
      id: 9,
      tipo: 1,
      icono: 'icon-estacional-06',
      descripcion: '¿Tienes ahora alguna(s) enfermeda(des) estacional(es)?',
      estado: 3,
      url: 'diario-enfermedades-estacionales'
    },
    {
      id: 10,
      tipo: 1,
      icono: 'icon-adicional-07',
      descripcion: '¿Te pasa algo adicional?',
      estado: 3,
      url: ''
    },
    {
      id: 11,
      tipo: 2,
      icono: 'icon-medicamentos-08',
      descripcion: '¿Que medicamentos tomaste?',
      estado: 3,
      url: ''
    },
    {
      id: 12,
      tipo: 2,
      icono: ' icon-regular-09',
      descripcion: '¿Como regulas tu enfermedad?',
      estado: 3,
      url: ''
    },
    {
      id: 13,
      tipo: 2,
      icono: 'icon-vision-10',
      descripcion: '¿Tienes problemas con la visión?',
      estado: 3,
      url: 'diario-vision'
    },
    {
      id: 14,
      tipo: 2,
      icono: 'icon-gastrico-11',
      descripcion: '¿Tienes problemas gástricos?',
      estado: 3,
      url: 'diario-gastricos'
    },
    {
      id: 15,
      tipo: 2,
      icono: 'icon-dolencias-12',
      descripcion: '¿Presentas dolencias en tu cuerpo?',
      estado: 3,
      url: 'diario-dolencia-cuerpo'
    },
    {
      id: 17,
      tipo: 2,
      icono: 'icon-senales-13',
      descripcion: '¿Qué otras señales presentas en tu organismo?',
      estado: 3,
      url: 'diario-senales-organismo'
    },
    {
      id: 12,
      tipo: 2,
      icono: 'icon-alergias-14',
      descripcion: '¿Tienes alergias?',
      estado: 3,
      url: 'diario-alergias'
    },
    {
      id: 12,
      tipo: 2,
      icono: 'icon-sentimiento-15',
      descripcion: '¿Qué sentimientos a nivel psíquico?',
      estado: 3,
      url: ''
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
