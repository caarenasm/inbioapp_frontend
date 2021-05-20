import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public alerta: AlertController,
    private conexion: ConexionService
  ) {}

  async ngOnInit() {

    this.conexion.appIsOnline$.subscribe(online => {
      //console.log(online);
      if (online) {
          this.conServicio();
          //console.log('Hay internet');
      } else {
          this.sinServicio();
          //console.log('Sin internet');
      }
    });

  }

  async conServicio() {
    const mensaje = await this.alerta.create({
      header: 'Mensaje',
      message: 'Conectado!',
      buttons: ['OK']
    });
    await mensaje.present();
    const { role } = await mensaje.onDidDismiss();
  }

  async sinServicio() {
    const mensaje = await this.alerta.create({
      header: 'Mensaje',
      message: 'Desconectado!',
      buttons: ['OK']
    });
    await mensaje.present();
    const { role } = await mensaje.onDidDismiss();
  }

}
