import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { PlanService } from '../../services/plan.service';
import { LoadingService } from '../../services/loading.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

import { Plans } from '../../interfaces/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  plan: Plans[];

  /*plan: Plans[] = [

    {
      img: 'assets/img/plan_gratuito.png',
      texto: '',
      texto2: '',
      titulo: 'Plan Gratuito',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/plan-basico.png',
      texto: '$50.000 x 3 meses',
      texto2: '$180.000 anual',
      titulo: 'Plan Básico',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/plan_saludable.png',
      texto: '$100.000 x 3 meses',
      texto2: '$380.000 anual',
      titulo: 'Plan Saludable',
      subtitulo: 'Beneficios:',
    },
    {
      img: 'assets/img/plan_empoderado.png',
      texto: '$150.000 x 3 meses',
      texto2: '$5700.000 anual',
      titulo: 'Plan Empoderado',
      subtitulo: 'Beneficios:',
    },
  ];*/

  constructor(
    private planServ: PlanService,
    private alertCtrl: AlertController,
    private loadingServ: LoadingService,
    private alertServ: AlertService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.planServ.getLista().subscribe(
      response => {
        this.plan = response;
      }
    );
  }

  async confirmar(data) {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Estas seguro que deseas continuar?',
      // eslint-disable-next-line max-len
        message: '<b>Mi opcion seleccionada:</b> ' + data.titulo + '<p>¿Esta seguro de su opcion?.</p>',
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
    /*this.loadingServ.cargando();

    this.loadingServ.dismissLoader();*/
    this.alertServ.presentAlert('Opcion Guardada con Exito!');
    /*this.router.navigate(['/menu']);*/
    //this.navCtrl.navigateRoot('/menu');
    this.navCtrl.navigateRoot('/menu');
  }

}
