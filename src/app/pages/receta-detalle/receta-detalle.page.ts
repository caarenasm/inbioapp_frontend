import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface Composicion {
  descripcion: string;
  cantidad: string;
  unidadMedida: string;
}

export interface Ingrediente {
  id: number;
  porcion: string;
  nombre: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  in_activo?: boolean;
}

export interface Preparacion {
  descripcion: string;
  orden: number;
}

export interface Receta {
  id: string;
  titulo: string;
  descripcion: string;
  ingredientes: Ingrediente[];
  preparacion: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fecha_publicacion: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  imagen_url: string;
  etiqueta: string[];
}

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
})
export class RecetaDetallePage implements OnInit {

  @Input() datos: Receta;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
