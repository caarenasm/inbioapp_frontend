import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-agua',
  templateUrl: './diario-agua.page.html',
  styleUrls: ['./diario-agua.page.scss'],
})
export class DiarioAguaPage implements OnInit {

datos: FormGroup;
vaso = 0;
menosVasoDisabled = false;

evento: Evento[] = [
  {
    id: 1,
    descripcion: 'No Pude Dormir.',
    icon: 'icon-como_duermes'
  },
  {
    id: 2,
    descripcion: 'Muy Bien y Me siento descansado.',
    icon: 'icon-como_duermes'
  },
  {
    id: 3,
    descripcion: 'Me Desperte varia Veces.',
    icon: 'icon-como_duermes'
  }
];

constructor(
  private formBuilder: FormBuilder,
  private alertServ: AlertService,
  private alertCtrl: AlertController,
  private modalCtrl: ModalController,
  private location: Location
) {
  this.datos = this.formBuilder.group({
    tipo: [ 1, Validators.required],
    opcion: ['', Validators.required],
  });
}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  masVaso() {
    if( this.vaso >= 0){
      this.menosVasoDisabled = false;
    }
    this.vaso += 1;
  }

  menosVaso() {

    if( this.vaso < 1){
      this.menosVasoDisabled = true;
      return;
    }else{
      this.menosVasoDisabled = false;
    }

    this.vaso -= 1;
  }

  counter(i: number) {
    return new Array(i);
  }

  cerrar() {
    this.location.back();
  }

  guardar(){
    if ( this.datos.invalid ){
      this.alertServ.presentAlert('Datos Requeridos, verifique el formulario!');

      return Object.values( this.datos.controls ).forEach( cntrl => {
        if ( cntrl instanceof FormGroup ) {
          Object.values( cntrl.controls ).forEach( control => control.markAsTouched() );
        } else {
          cntrl.markAsTouched();
        }
      });

    }
    this.confirmar();
  }

  async confirmar() {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      message: '¿Estas seguro que deseas Guardar?',
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
            this.datos.get('lectura').setValue(JSON.stringify(this.datos.value));
            console.log(this.datos.value);
          }
        }
      ]
    });

    await alert.present();

  }

}
