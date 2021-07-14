import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingCtrl: LoadingController,
  ) { }

    // Simple loader
    simpleLoader() {
      this.loadingCtrl.create({
        message: 'Loading...'
      }).then((response) => {
        response.present();
      });
    }

    // Dismiss loader
    dismissLoader() {
      this.loadingCtrl.dismiss().then((response) => {
        /*console.log('Loader closed!', response);*/
      }).catch((err) => {
        console.log('Error occured : ', err);
      });
    }

    // Auto hide show loader
    autoLoader() {
      this.loadingCtrl.create({
        message: 'Loader hides after 4 seconds',
        duration: 4000
      }).then((response) => {
        response.present();
        // eslint-disable-next-line @typescript-eslint/no-shadow
        response.onDidDismiss().then((response) => {
          console.log('Loader dismissed', response);
        });
      });
    }

    // Custom style + hide on tap loader
    cargando() {
      this.loadingCtrl.create({
        message: 'Por Favor Espere...',
        spinner: 'bubbles',
        translucent: true,
        cssClass: 'cargando',
        backdropDismiss:false
      }).then((res) => {
        res.present();
      });
    }
}
