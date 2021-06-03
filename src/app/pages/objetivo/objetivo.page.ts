import { Component, OnInit } from '@angular/core';

export interface Objetivo {
  img: string; 
  titulo: string; 
  descripcion: string; 
}

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.page.html',
  styleUrls: ['./objetivo.page.scss'],
})
export class ObjetivoPage implements OnInit {

  objetivos: Objetivo[] = [
    {
      img: 'assets/img/producto.png',
      titulo: 'Regular mi peso',
      descripcion: 'Si quieres lograr con éxito el objetivo de bajar o subir de peso para mejorar tu estado de salud o apariencia fícisa.',
    },
    {
      img: 'assets/img/producto.png',
      titulo: 'Mejorar mi salud',
      descripcion: 'Si tu propósito es mejorar los síntomas de tus enfermedades y poder sentirte bien cada día.',
    },
    {
      img: 'assets/img/producto.png',
      titulo: 'Mantener mi estilo de vida',
      descripcion: 'Si ya haz hecho cambios en tu dieta y deseas mantenerte motivado para seguirla.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
