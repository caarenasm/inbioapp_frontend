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
  selector: 'app-diario-suplementos',
  templateUrl: './diario-suplementos.page.html',
  styleUrls: ['./diario-suplementos.page.scss'],
})
export class DiarioSuplementosPage implements OnInit {

  slideOpts = {
    slidesPerView: 2,
    freeMode: true
  };

  datos: FormGroup;

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'BELLASEN',
      descripcion_vita: 'VITAMINAS',
      icon: 'icon-usuario'
    },
    {
      id: 2,
      descripcion: 'BELLASEN',
      descripcion_vita: 'VITAMINAS',
      icon: 'icon-usuario'
    },
    {
      id: 3,
      descripcion: 'BELLASEN',
      descripcion_vita: 'VITAMINAS',
      icon: 'icon-usuario'
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

}
