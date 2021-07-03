import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(text: any) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }
}
