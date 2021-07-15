import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
  ) { }

  async presentAlert(msg: any) {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      message: msg,
      cssClass:'alerta',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
        }
      ]
    });

    await alert.present();

  }

  async alertaConfirmar( msg: any) {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Estas seguro que deseas continuar?',
      message: msg,
      cssClass:'alerta',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
        },
        {
          text: 'Continuar',
          cssClass:'alerta-boton-aceptar'
        }
      ]
    });

    await alert.present();

  }
}
