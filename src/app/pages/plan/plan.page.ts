import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';

import { PlanService } from '../../services/plan.service';
import { LoadingService } from '../../services/loading.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

import { Plans } from '../../interfaces/plan';

const PRODUCT_GEMS_KEY = 'devgems100';
const PRODUCT_PRO_KEY = 'devpro';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  gems = 0;
  isPro = false;
  products: IAPProduct[] = [];

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
    private plt: Platform,
    private store: InAppPurchase2,
    private ref: ChangeDetectorRef,
  ) {
    this.plt.ready().then(() => {
      // Only for debugging!
      this.store.verbosity = this.store.DEBUG;

      this.registerProducts();
      this.setupListeners();

      // Get the real product information
      this.store.ready(() => {
        this.products = this.store.products;
        this.ref.detectChanges();
      });
    });
  }

  ngOnInit() {
    this.planServ.getLista().subscribe(
      response => {
        this.plan = response;
      }
    );
  }

  registerProducts() {
    this.store.register({
      id: PRODUCT_GEMS_KEY,
      type: this.store.CONSUMABLE,
    });

    this.store.register({
      id: PRODUCT_PRO_KEY,
      type: this.store.NON_CONSUMABLE,
    });

    this.store.refresh();
  }

  setupListeners() {
    // General query to all products
    this.store.when('product')
      .approved((p: IAPProduct) => {
        // Handle the product deliverable
        if (p.id === PRODUCT_PRO_KEY) {
          this.isPro = true;
        } else if (p.id === PRODUCT_GEMS_KEY) {
          this.gems += 100;
        }
        this.ref.detectChanges();

        return p.verify();
      })
      .verified((p: IAPProduct) => p.finish());

    // Specific query for one ID
    this.store.when(PRODUCT_PRO_KEY).owned((p: IAPProduct) => {
      this.isPro = true;
    });
  }

  purchase(product: IAPProduct) {
    this.store.order(product).then(p => {
      // Purchase in progress!
    }, e => {
      this.presentAlert('Failed', `Failed to purchase: ${e}`);
    });
  }

  // To comply with AppStore rules
  restore() {
    this.store.refresh();
  }

  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
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
    this.loadingServ.cargando();

    this.planServ.guardar(data).subscribe(
      response => {
        if(response){
          if(response.status === true){
            this.loadingServ.dismissLoader();
            this.alertServ.presentAlert('Opcion Guardada con Exito!');
            this.navCtrl.navigateRoot('/menu');
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
