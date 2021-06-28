import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {}

  mostrarMenu() {
    this.menuCtrl.enable(true, 'mi-menu');
    this.menuCtrl.open('mi-menu');
  }

}