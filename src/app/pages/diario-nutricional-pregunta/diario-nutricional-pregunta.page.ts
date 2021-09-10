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
