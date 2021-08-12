import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  descripcion_vita: string;
  icon: string;
}

@Component({
  selector: 'app-diario-gastricos',
  templateUrl: './diario-gastricos.page.html',
  styleUrls: ['./diario-gastricos.page.scss'],
})
export class DiarioGastricosPage implements OnInit {

  slideOpts = {
    slidesPerView: 2,
    freeMode: true
  };

  datos: FormGroup;

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'Nauseas',
      descripcion_vita: 'Gastritis',
      icon: 'icon-neutro'
    },
    {
      id: 2,
      descripcion: 'Nauseas',
      descripcion_vita: 'Gastritis',
      icon: 'icon-neutro'
    },
    {
      id: 3,
      descripcion: 'Nauseas',
      descripcion_vita: 'Gastritis',
      icon: 'icon-neutro'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
  ) { 
    this.datos = this.formBuilder.group({
      tipo: [ 1, Validators.required],
      opcion: ['', Validators.required],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      hora_ini: ['', Validators.required],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      hora_fin: ['', Validators.required],
      lectura: ['', ],
    });

  }

  @ViewChild('miOpcion') slides: IonSlides;

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

}
