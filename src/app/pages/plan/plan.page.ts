import { Component, OnInit } from '@angular/core';

export interface Plans {
  img: string;
  texto: string;
  texto2: string;
  titulo: string; 
  subtitulo: string; 
}

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  plan: Plans[] = [

    {
      img: 'assets/img/plan_gratuito.png',
      texto: '',
      texto2: '',
      titulo: 'Plan Gratuito',
      subtitulo: 'Beneficios:', 
    },
    {
      img: 'assets/img/plan-basico.png',
      texto: '$50.000 x 3 meses',
      texto2: '$180.000 anual',
      titulo: 'Plan Básico',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/plan_saludable.png',
      texto: '$100.000 x 3 meses',
      texto2: '$380.000 anual',
      titulo: 'Plan Saludable',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/plan_empoderado.png',
      texto: '$150.000 x 3 meses',
      texto2: '$5700.000 anual',
      titulo: 'Plan Empoderado',
      subtitulo: 'Beneficios:',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
