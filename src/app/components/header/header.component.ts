import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {}

  mostrarMenu() {
    this.menuCtrl.enable(true, 'mi-menu');
    this.menuCtrl.open('mi-menu');
  }

}
