/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

export interface Comida {
  id: number;
  descripcion: string;
  img: string;
}

@Component({
  selector: 'app-diario-comida',
  templateUrl: './diario-comida.page.html',
  styleUrls: ['./diario-comida.page.scss'],
})
export class DiarioComidaPage implements OnInit {

  slideOptsDos = {
    slidesPerView: 2.4,
    freeMode: true
  };

  datos: FormGroup;

  desayuno: Comida[] = [
    {
      id: 1,
      descripcion: 'Pan',
      img: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'Arepa',
      img: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'Panques',
      img: 'producto.png'
    },
    {
      id: 4,
      descripcion: 'Cafe',
      img: 'producto.png'
    },
    {
      id: 5,
      descripcion: 'Galletas',
      img: 'producto.png'
    },
    {
      id: 6,
      descripcion: 'Leche',
      img: 'producto.png'
    }
  ];

  almuerzo: Comida[] = [
    {
      id: 1,
      descripcion: 'Pollo',
      img: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'Carne',
      img: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'Pescado',
      img: 'producto.png'
    },
    {
      id: 4,
      descripcion: 'Frutas',
      img: 'producto.png'
    },
    {
      id: 5,
      descripcion: 'Ensalada',
      img: 'producto.png'
    },
    {
      id: 6,
      descripcion: 'Leche',
      img: 'producto.png'
    }
  ];

  cena: Comida[] = [
    {
      id: 1,
      descripcion: 'Pan',
      img: 'producto.png'
    },
    {
      id: 2,
      descripcion: 'Arepa',
      img: 'producto.png'
    },
    {
      id: 3,
      descripcion: 'Panques',
      img: 'producto.png'
    },
    {
      id: 4,
      descripcion: 'Cafe',
      img: 'producto.png'
    },
    {
      id: 5,
      descripcion: 'Galletas',
      img: 'producto.png'
    },
    {
      id: 6,
      descripcion: 'Leche',
      img: 'producto.png'
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

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;
  @ViewChild('miOpcionDos') slidesDos: IonSlides;
  @ViewChild('miOpcionTres') slidesTres: IonSlides;

  cerrar() {
    //this.modalCtrl.dismiss();
    this.location.back();
  }

  verReceta(item) {
    console.log(item);
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
