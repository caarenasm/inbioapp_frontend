import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.scss'],
})
export class BotonMenuComponent implements OnInit {

  @Input() icono: string;
  @Input() texto: string;
  @Input() fondo: string;
  @Input() pagina: string;

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  navigateForward(vinculo){
    this.navCtrl.navigateRoot(vinculo);
  }

}
