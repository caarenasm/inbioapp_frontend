import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

export interface Habitos {
  id: number;
  icono: string;
  descripcion: string;
  estado: number;
  url: string;
}

@Component({
  selector: 'app-diario-nutricional-pregunta',
  templateUrl: './diario-nutricional-pregunta.page.html',
  styleUrls: ['./diario-nutricional-pregunta.page.scss'],
})
export class DiarioNutricionalPreguntaPage implements OnInit {

  fecha: any;

  habito: Habitos[] = [
    {
      id: 1,
      icono: 'icon-mejorar_sueno_02',
      descripcion: '¿Como Dormiste?',
      estado: 1,
      url: 'diario-sueno'
    },
    {
      id: 2,
      icono: 'icon-pesa',
      descripcion: '¿Cuanto pesaste?',
      estado: 2,
      url: 'diario-sueno'
    },
    {
      id: 3,
      icono: 'icon-actividad_fisica_2',
      descripcion: '¿Que actividad(es) físicas practicastes',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 4,
      icono: 'icon-medicamentos-08',
      descripcion: '¿Qué medicamentos tomas?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 5,
      icono: 'icon-regular-09',
      descripcion: '¿Cómo regulas tu enfermedad?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 6,
      icono: 'icon-vision-10',
      descripcion: '¿Tienes problemas con la visión?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 7,
      icono: 'icon-gastrico-11',
      descripcion: '¿Tienes problemas gástricos?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 8,
      icono: 'icon-dolencias-12',
      descripcion: '¿Presentas dolencias en tu cuerpo?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 9,
      icono: 'icon-senales-13',
      descripcion: '¿Qué otras señales presentas en tu organismo?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 10,
      icono: 'icon-alergias-14',
      descripcion: '¿Tienes alergias?',
      estado: 3,
      url: 'diario-sueno'
    },
    {
      id: 11,
      icono: 'icon-sentimiento-15',
      descripcion: '¿Qué sentimientos a nivel psíquico?',
      estado: 3,
      url: 'diario-sueno'
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

}
