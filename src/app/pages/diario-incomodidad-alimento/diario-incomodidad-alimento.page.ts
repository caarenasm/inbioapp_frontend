import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

export interface Alimento {
  id: number;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-diario-incomodidad-alimento',
  templateUrl: './diario-incomodidad-alimento.page.html',
  styleUrls: ['./diario-incomodidad-alimento.page.scss'],
})
export class DiarioIncomodidadAlimentoPage implements OnInit {

  datos: FormGroup;
  arreglo: FormGroup;
  checked = [];
  cantidad = 0;

  slideOptsDos = {
    slidesPerView: 4.6,
    freeMode: true
  };

  alimento: Alimento[] = [
    {
      id: 1,
      descripcion: 'Cafe',
      icon: 'icon-hambre'
    },
    {
      id: 2,
      descripcion: 'Coliflor',
      icon: 'icon-hambre'
    },
    {
      id: 3,
      descripcion: 'Pan',
      icon: ' icon-hambre'
    },
    {
      id: 4,
      descripcion: 'Leche',
      icon: 'icon-hambre'
    },
    {
      id: 5,
      descripcion: 'Frutas',
      icon: 'icon-hambre'
    },
    {
      id: 6,
      descripcion: 'Galletas',
      icon: 'icon-hambre'
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
      tipo: [ 5, Validators.required],
      opcion: ['', Validators.required],
      lectura: ['', ],
    });
    this.arreglo = this.formBuilder.group({});

  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
  }

  cerrar() {
    //this.modalCtrl.dismiss();
    this.location.back();
  }

   //Adds the checkedbox to the array and check if you unchecked it
   addCheckbox(event, checkbox: number) {
    if ( event.detail.checked ) {
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

  agregar(){
    const tipo = this.datos.get('opcion').value;
    const filtro = this.alimento.find( datos => datos.id === tipo,);
    this.arreglo.addControl('detalle[' + tipo + ']',
      new FormControl( filtro.descripcion, Validators.required)
    );
    /*console.log(this.checked);*/
  }

  remover(control){
    this.arreglo.removeControl(control.key);
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
