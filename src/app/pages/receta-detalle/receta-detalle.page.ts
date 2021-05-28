import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface Composicion {
  descripcion: string;
  cantidad: string;
  unidadMedida: string;
}

export interface Ingrediente {
  descripcion: string;
  cantidad: string;
  unidadMedida: string;
  inActivo: boolean;
}

export interface Preparacion {
  descripcion: string;
  orden: number;
}

export interface Receta {
  img: string;
  fecha: string; 
  descripcion: string; 
  composicion: Composicion[];
  ingrediente: Ingrediente[];
  preparacion: Preparacion[];
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
