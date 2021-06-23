import { Component, OnInit } from '@angular/core';

export interface Productos { 
  titulo: string; 
  precio: string;
  titulo2: string;
  subtitulo: string;
  titulo3: string; 
  subtitulo1: string;
  subtitulo2: string;
  subtitulo3: string;
  subtitulo4: string;
}


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {

  producto: Productos[] = [
    {
      titulo: 'Bellasen Crema',
      precio: '$31.000',
      titulo2: 'Crema de 30 g',
      subtitulo: 'Crema de base 100% natural, hecha de colágeno de origen vegetal y minerales.',
      titulo3: 'Propiedades:',
      subtitulo1: '1. Nutre y sella la piel para proteger y reconstruir tejido dañado deido al acné, heridas, quemaduras y cicatrices',
      subtitulo2: '2. Ayuda a la regeneración celular',
      subtitulo3: '3. Se la piel y la protege de agentes externos como la polución, bacterías e impurezas',
      subtitulo4: '4. Restaura la piel mientras se duerme'
      }
  ]

  constructor() { }

  ngOnInit() {
  }

  guardar(){

    alert('Guardar');

  }

}
