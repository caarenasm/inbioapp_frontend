import { Component, OnInit } from '@angular/core';

export interface Plans {
  img: string; 
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
      img: 'assets/img/producto.png',
      titulo: 'Plan Gratuito',
      subtitulo: 'Beneficios:', 
    },
    {
      img: 'assets/img/producto.png',
      titulo: 'Plan Básico',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/producto.png',
      titulo: 'Plan Saludable',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/producto.png',
      titulo: 'Plan Empoderado',
      subtitulo: 'Beneficios:',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
