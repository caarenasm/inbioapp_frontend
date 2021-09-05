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
  selector: 'app-diario-senales-organismo',
  templateUrl: './diario-senales-organismo.page.html',
  styleUrls: ['./diario-senales-organismo.page.scss'],
})
export class DiarioSenalesOrganismoPage implements OnInit {

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
      descripcion: 'Sudoración excesiva1',
      descripcion_dos: 'Escalofrios1',
      icon: 'icon-neutro',
      icono: 'icon-suplementos' 
    },
    {
      idd: 2,
      id: 2,
      descripcion: 'Sudoración excesiva2',
      descripcion_dos: 'Escalofrios2',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 3,
      id: 3,
      descripcion: 'Sudoración excesiva3',
      descripcion_dos: 'Escalofrios3',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 4,
      id: 4,
      descripcion: 'Sudoración excesiva4',
      descripcion_dos: 'Escalofrios4',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 5,
      id: 5,
      descripcion: 'Sudoración excesiva5',
      descripcion_dos: 'Escalofrios5',
      icon: 'icon-neutro',
      icono: 'icon-suplementos'
    },
    {
      idd: 6,
      id: 6,
      descripcion: 'Sudoración excesiva6',
      descripcion_dos: 'Escalofrios6',
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
