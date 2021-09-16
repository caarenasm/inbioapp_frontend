import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-diario-medicamento',
  templateUrl: './diario-medicamento.page.html',
  styleUrls: ['./diario-medicamento.page.scss'],
})
export class DiarioMedicamentoPage implements OnInit {

  datos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
    private location: Location
  ) {
    this.datos = this.formBuilder.group({
      tipo: [ 3, Validators.required],
      medicamento: ['', Validators.required],
      lectura: ['', ],
    });
   }

  ngOnInit() {
  }

  guardar(){
    if ( this.datos.invalid ){
      this.alertServ.presentAlert('Datos Requeridos, verifique el formulario!');

      return Object.values( this.datos.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
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

  cerrar() {
    this.location.back();
  }

}
