import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { AlertController, IonSlides } from '@ionic/angular';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;

}

@Component({
  selector: 'app-diario-gastricos',
  templateUrl: './diario-gastricos.page.html',
  styleUrls: ['./diario-gastricos.page.scss'],
})
export class DiarioGastricosPage implements OnInit {

  datos: FormGroup;
  arreglo: FormGroup;
  checked = [];
  cantidad = 0;

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
      descripcion: 'Reflujo',
      icon: 'icon-reflujo'
    },
    {
      id: 2,
      descripcion: 'Ulcera',
      icon: 'icon-ulcera'
    },
    {
      id: 3,
      descripcion: 'Gastritis',
      icon: 'icon-gastritis_1'
    },
    {
      id: 4,
      descripcion: 'Mal aliento',
      icon: 'icon-mal_aliento'
    },
    {
      id: 5,
      descripcion: 'Nauseas',
      icon: 'icon-nauseas'
    },
    {
      id: 6,
      descripcion: 'Vómito',
      icon: 'icon-vomito'
    },
    {
      id: 7,
      descripcion: 'Diarrea',
      icon: 'icon-diarrea'
    },
    {
      id: 8,
      descripcion: 'Estrenimiento',
      icon: 'icon-estrenimiento'
    },
    {
      id: 9,
      descripcion: 'Inflamacion estomacal',
      icon: 'icon-inflamacion_estomacal'
    },
    {
      id: 10,
      descripcion: 'Colon irritable',
      icon: 'icon-colon_irritable'
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
    this.arreglo = this.formBuilder.group({});
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miOpcion') slides: IonSlides;

  ngOnInit() {
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
    const filtro = this.evento.find( datos => datos.id === tipo,);
    this.arreglo.addControl('detalle[' + tipo + ']',
      new FormControl( filtro.descripcion, Validators.required)
    );
    /*console.log(this.checked);*/
  }

  get getPiecesArray() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return (<FormArray>this.datos.get('lectura'));
  }

  icono(tipo){
    const filtro = this.evento.find(x => x.id = tipo);
    return filtro.icon;
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
