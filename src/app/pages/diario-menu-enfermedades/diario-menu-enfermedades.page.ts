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
  selector: 'app-diario-menu-enfermedades',
  templateUrl: './diario-menu-enfermedades.page.html',
  styleUrls: ['./diario-menu-enfermedades.page.scss'],
})
export class DiarioMenuEnfermedadesPage implements OnInit {

  diario: Diarios [] = [
    {
      fecha: '21 / 07 / 21',
      nombre: 'Pedro',
      habito: [
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Qué medicamentos tomas?',
          estado: 1
        },
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Cómo regulas tu enfermedad?',
          estado: 2
        },
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Tienes problemas con la visión?',
          estado: 3
        },{
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Tienes problemas gástricos?',
          estado: 4
        },
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Presentas dolencias en tu cuerpo?',
          estado: 5
        },
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Qué otras señales presentas en tu organismo?',
          estado: 6
        },
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Tienes alergias?',
          estado: 7
        },
        {
          icono: 'icon-mejorar_sueno_02',
          descripcion: '¿Qué sentimientos a nivel psíquico?',
          estado: 8
        }
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
