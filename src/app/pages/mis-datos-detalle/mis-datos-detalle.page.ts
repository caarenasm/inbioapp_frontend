import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos-detalle',
  templateUrl: './mis-datos-detalle.page.html',
  styleUrls: ['./mis-datos-detalle.page.scss'],
})
export class MisDatosDetallePage implements OnInit {

  @Input() datos: any[];

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
