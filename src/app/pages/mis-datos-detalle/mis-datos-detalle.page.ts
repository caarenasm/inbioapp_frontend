import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface Consulta {
  descripcion: string; 
  icon: string; 
  respuesta: string; 
  resultado: string[];
}

@Component({
  selector: 'app-mis-datos-detalle',
  templateUrl: './mis-datos-detalle.page.html',
  styleUrls: ['./mis-datos-detalle.page.scss'],
})
export class MisDatosDetallePage implements OnInit {

  @Input() datos: Consulta;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
