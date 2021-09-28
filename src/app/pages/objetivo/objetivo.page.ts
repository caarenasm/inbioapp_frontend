import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { ObjetivoService } from '../../services/objetivo.service';
import { LoadingService } from '../../services/loading.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

import { Objetivo } from '../../interfaces/objetivo';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.page.html',
  styleUrls: ['./objetivo.page.scss'],
})
export class ObjetivoPage implements OnInit {

  objetivos: Objetivo[];

  constructor(
    private objetivoServ: ObjetivoService,
    private alertCtrl: AlertController,
    private loadingServ: LoadingService,
    private alertServ: AlertService,
    private router: Router,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.objetivoServ.getLista().subscribe(
      response => {
        this.objetivos = response;
      }
    );
  }

  async confirmar(data) {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Estas seguro que deseas continuar?',
      // eslint-disable-next-line max-len
        message: '<b>Mi opcion seleccionada:</b> ' + data.nombre + '<p>¿Esta seguro de su opcion?.</p>',
      cssClass:'alerta',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
        },
        {
          text: 'Continuar',
          cssClass:'alerta-boton-aceptar',
          handler: () => {
            this.postDatos(data);
          }
        }
      ]
    });

    await alert.present();

  }

  postDatos(data) {
    this.loadingServ.cargando();

    this.objetivoServ.guardar(data).subscribe(
      response => {
        if(response){
          if(response.status === true){
            this.loadingServ.dismissLoader();
            this.alertServ.presentAlert('Opcion Guardada con Exito!');
            /*this.router.navigate(['/menu']);*/
            //this.navCtrl.navigateRoot('/menu');
            this.navCtrl.navigateRoot('/plan');
          }else{
            this.loadingServ.dismissLoader();
            this.alertServ.presentAlert('Error al procesar datos, verifique el formulario!');
          }
        }else{
          this.loadingServ.dismissLoader();
          this.alertServ.presentAlert('Error al procesar datos, verifique el formulario!');
        }

      }
    );
  }

}
