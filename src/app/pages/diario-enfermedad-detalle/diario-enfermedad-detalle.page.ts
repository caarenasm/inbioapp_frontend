import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-diario-enfermedad-detalle',
  templateUrl: './diario-enfermedad-detalle.page.html',
  styleUrls: ['./diario-enfermedad-detalle.page.scss'],
})
export class DiarioEnfermedadDetallePage implements OnInit {

  datos: FormGroup;
  arreglo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
  ) {
    this.datos = this.formBuilder.group({
      tipo: [ 4, Validators.required],
      medicamento: ['', Validators.required],
      lectura: ['', ],
    });
    this.arreglo = this.formBuilder.group({});
  }

  ngOnInit() {
  }

  agregar(item){
    let texto: string;
    switch (item) {
      case 1:
          texto = 'Glucosa';
        break;
      case 2:
          texto = 'Presion Arterial';
        break;
      case 3:
          texto = 'Saturacion de Oxigeno';
        break;
      default:
          texto = 'N/A';
        break;
    }

    this.arreglo.addControl('detalle['+ item +']', new FormControl( texto, Validators.required));
  }

  remover(control){
    this.arreglo.removeControl(control.key);
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

}
