import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonSlides } from '@ionic/angular';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-dolencia-cuerpo',
  templateUrl: './diario-dolencia-cuerpo.page.html',
  styleUrls: ['./diario-dolencia-cuerpo.page.scss'],
})
export class DiarioDolenciaCuerpoPage implements OnInit {

  datos: FormGroup;
  checked = [];

  slideOpts = {
    slidesPerView: 2.3,
    freeMode: true
  };

  slideOptsDos = {
    slidesPerView: 4.6,
    freeMode: true
  };

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'Cabeza',
      icon: 'icon-nadar'
    },
    {
      id: 2,
      descripcion: 'Cuello',
      icon: 'icon-correr'
    },
    {
      id: 3,
      descripcion: 'Pies',
      icon: 'icon-pesas'
    },
    {
      id: 4,
      descripcion: 'Brazos',
      icon: 'icon-aerobicos'
    },
    {
      id: 5,
      descripcion: 'Pecho',
      icon: 'icon-yoga'
    },
    {
      id: 6,
      descripcion: 'Espalda',
      icon: 'icon-yoga'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
  ) {
    this.datos = this.formBuilder.group({
      tipo: [ 5, Validators.required],
      opcion: ['', Validators.required],
      lectura: ['', ],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  //Adds the checkedbox to the array and check if you unchecked it
  addCheckbox(event, checkbox: number) {
    if ( event.checked ) {
      this.checked.push(checkbox);
    } else {
      let index = this.removeCheckedFromArray(checkbox);
      this.checked.splice(index,1);
    }
  }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox: number) {
    return this.checked.findIndex((category)=>category === checkbox);
  }

  //Empties array with checkedboxes
  emptyCheckedArray() {
    this.checked = [];
  }

  agregar() {
    //Do whatever
    console.log(this.checked);
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
