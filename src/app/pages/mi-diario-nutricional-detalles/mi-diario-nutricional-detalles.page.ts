import { Component, OnInit } from '@angular/core';

export interface Habito {
  icono: string;
  descripcion: string;
  estado: number;
}

export interface Diarios {
  fecha: string;
  nombre: string;
  habito: Habito[]
}

@Component({
  selector: 'app-mi-diario-nutricional-detalles',
  templateUrl: './mi-diario-nutricional-detalles.page.html',
  styleUrls: ['./mi-diario-nutricional-detalles.page.scss'],
})
export class MiDiarioNutricionalDetallesPage implements OnInit {

  diario: Diarios [] = [
    {
      fecha: '21 / 07 / 21',
      nombre: 'Pedro',
      habito: [
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Como Dormiste?',
          estado: 1
        },
        {
          icono: 'icon-pesa',
          descripcion: '¿Cuanto pesaste?',
          estado: 2
        },
        {
          icono: 'icon-actividad_fisica_2',
          descripcion: '¿Que actividad(es) físicas practicastes',
          estado: 3
        }
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
