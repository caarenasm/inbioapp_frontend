import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { AlertController, IonSlides } from '@ionic/angular';

import { AlertService } from '../../services/alert.service';

export interface Evento {
  idd: number;
  id: number;
  descripcion: string;
  descripcion_dos: string;
  icon: string;
  icono: string;
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
      idd: 1,
      id: 1,
      descripcion: 'Nauseas1',
      descripcion_dos: 'Gastritis1',
      icon: 'icon-neutro',
      icono: 'icon-suplementos' 
    },
    {
      idd: 2,
      id: 2,
      descripcion: 'Nauseas2',
      descripcion_dos: 'Gastritis2',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 3,
      id: 3,
      descripcion: 'Nauseas3',
      descripcion_dos: 'Gastritis3',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 4,
      id: 4,
      descripcion: 'Nauseas4',
      descripcion_dos: 'Gastritis4',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 5,
      id: 5,
      descripcion: 'Nauseas5',
      descripcion_dos: 'Gastritis5',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 6,
      id: 6,
      descripcion: 'Nauseas6',
      descripcion_dos: 'Gastritis6',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
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

  agregar_dos(){
    const tipo = this.datos.get('opcion').value;
    const filtro = this.evento.find( datos => datos.idd === tipo,);
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
