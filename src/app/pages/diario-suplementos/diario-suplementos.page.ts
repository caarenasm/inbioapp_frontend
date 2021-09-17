import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  img: string;
}

@Component({
  selector: 'app-diario-suplementos',
  templateUrl: './diario-suplementos.page.html',
  styleUrls: ['./diario-suplementos.page.scss'],
})
export class DiarioSuplementosPage implements OnInit {

  slideOptsDos = {
    slidesPerView: 4.6,
    freeMode: true
  };

  datos: FormGroup;
  arreglo: FormGroup;

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'Bellasen',
      img: 'Bellasen.jpg'
    },
    {
      id: 2,
      descripcion: 'Bellasen crema',
      img: 'bellasen_crema_2.jpg'
    },
    {
      id: 3,
      descripcion: 'Bioremix mana especial',
      img: 'Bioremix_mana_especial.jpg'
    },
    {
      id: 4,
      descripcion: 'Bioremix mana',
      img: 'Bioremix_mana.jpg'
    },
    {
      id: 5,
      descripcion: 'Bioremix',
      img: 'Bioremix.jpg'
    },
    {
      id: 6,
      descripcion: 'Dolfin',
      img: 'Dolfin.jpg'
    },
    {
      id: 7,
      descripcion: 'Purafib',
      img: 'Purafib.jpg'
    },
    {
      id: 8,
      descripcion: 'Aminoacidos esenciales',
      img: 'aminoacidos_esenciales.jpg'
    },
    {
      id: 9,
      descripcion: 'Proteínas',
      img: 'proteina.jpg'
    },
    {
      id: 10,
      descripcion: 'Fermentos o microgornaismos',
      img: 'fermentos_microorganismo.jpg'
    },
    {
      id: 11,
      descripcion: 'Minerales',
      img: 'Minerales.jpg'
    },
    {
      id: 12,
      descripcion: 'Aceites esenciales',
      img: 'aceites_esenciales.jpg'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
    private location: Location
  ) {
    this.datos = this.formBuilder.group({
      tipo: [ 2, Validators.required],
      opcion: ['', Validators.required],
      tiempo: ['', Validators.required],
      lectura: ['', ],
    });
    this.arreglo = this.formBuilder.group({});
  }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  agregar(){
    const tipo = this.datos.get('opcion').value;
    const filtro = this.evento.find( datos => datos.id === tipo);
    this.arreglo.addControl('detalle[' + tipo + ']', new FormControl( filtro.descripcion, Validators.required));
  }

  remover(control){
    this.arreglo.removeControl(control.key);
  }

  cerrar() {
    this.location.back();
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
