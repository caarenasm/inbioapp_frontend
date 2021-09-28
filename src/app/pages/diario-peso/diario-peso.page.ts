import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-diario-peso',
  templateUrl: './diario-peso.page.html',
  styleUrls: ['./diario-peso.page.scss'],
})
export class DiarioPesoPage implements OnInit {

  peso = 0;
  menosPesoDisabled = false;
  datos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private location: Location
  ) {

    this.datos = this.formBuilder.group({
      tipo: [ 1, Validators.required],
      peso: [this.peso, Validators.required],
      lectura: ['', ],
    });

   }

  ngOnInit() {
  }

  masPeso() {
    if( this.peso >= 0){
      this.menosPesoDisabled = false;
    }
    this.peso += 1;
  }

  menosPeso() {

    if( this.peso < 1){
      this.menosPesoDisabled = true;
      return;
    }else{
      this.menosPesoDisabled = false;
    }

    this.peso -= 1;
  }

  cerrar() {
    //this.modalCtrl.dismiss();
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
