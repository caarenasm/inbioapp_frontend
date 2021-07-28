import { Component, OnInit } from '@angular/core';

export interface Habito {
  icono: string;
  descripcion: string;
  icono_estado: string;
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
          icono: 'icon-como_duermes',
          descripcion: '¿Como Dormiste?',
          icono_estado: 'checkmark-circle'
        },
        {
          icono: 'icon-reloj',
          descripcion: '¿Cuanto pesaste?',
          icono_estado: 'checkmark-circle'
        },
        {
          icono: 'icon-actividad_fisica1',
          descripcion: '¿Que actividad(es) físicas practicastes',
          icono_estado: 'checkmark-circle'
        }
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
