import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-sueno',
  templateUrl: './diario-sueno.page.html',
  styleUrls: ['./diario-sueno.page.scss'],
})
export class DiarioSuenoPage implements OnInit {

  slideOpts = {
    slidesPerView: 2,
    freeMode: true
  };

  datos: FormGroup;

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
      // eslint-disable-next-line @typescript-eslint/naming-convention
      hora_ini: ['', Validators.required],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      hora_fin: ['', Validators.required],
      lectura: ['', ],
    });

  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  getHoraIni(e) {
    const date = new Date(e.target.value).toISOString();
    this.datos.get('hora_ini').setValue(date, {
       onlyself: true
    });
  }

  getHoraFin(e) {
    const date = new Date(e.target.value).toISOString();
    this.datos.get('hora_fin').setValue(date, {
       onlyself: true
    });
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
    //this.modalCtrl.dismiss();
    this.location.back();
  }

}
