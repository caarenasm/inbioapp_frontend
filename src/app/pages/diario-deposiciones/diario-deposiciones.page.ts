import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController, IonSlides } from '@ionic/angular';

import { AlertService } from '../../services/alert.service';

export interface TipoDeposicion {
  id: number;
  descripcion: string;
  icon: string;
}

export interface Evento {
  id: number;
  descripcion: string;
  icon: string;
}


@Component({
  selector: 'app-diario-deposiciones',
  templateUrl: './diario-deposiciones.page.html',
  styleUrls: ['./diario-deposiciones.page.scss'],
})
export class DiarioDeposicionesPage implements OnInit {

  datos: FormGroup;
  arreglo: FormGroup;
  checked = [];
  cantidad = 0;
  tipo = false;

  slideOpts = {
    slidesPerView: 2.3,
    freeMode: true
  };

  slideOptsDos = {
    slidesPerView: 4.6,
    freeMode: true
  };

  tipo_deposicion: TipoDeposicion[] = [
    {
      id: 1,
      descripcion: 'Líquido',
      icon: 'icon-liquido',
    },
    {
      id: 2,
      descripcion: 'Sin forma',
      icon: 'icon-sin_forma',
    },
    {
      id: 3,
      descripcion: 'Blando con Forma',
      icon: 'icon-blando',
    },
    {
      id: 4,
      descripcion: 'Duro con Forma',
      icon: 'icon-duro',
    },
    {
      id: 4,
      descripcion: 'Bolitas duras',
      icon: 'icon-duro_bolitas',
    },
    
  ];

  evento: Evento[] = [
    {
      id: 1,
      descripcion: 'PURAFIB 1',
      icon: 'icon-usuario'
    },
    {
      id: 2,
      descripcion: 'PURAFIB 2',
      icon: 'icon-usuario'
    },
    {
      id: 3,
      descripcion: 'PURAFIB 3',
      icon: 'icon-usuario'
    },
    {
      id: 4,
      descripcion: 'PURAFIB 4',
      icon: 'icon-usuario'
    },
    {
      id: 5,
      descripcion: 'PURAFIB 5',
      icon: 'icon-usuario'
    },
    {
      id: 6,
      descripcion: 'PURAFIB 6',
      icon: 'icon-usuario'
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

  tipoDepo(event) {
    if(event.target.value == 1){
      this.tipo = true;
    }else{
      this.tipo = false;
    }
    
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
    const filtro = this.evento.find(x => x.id == tipo);
    this.cantidad++;
    this.arreglo.addControl('detalle[' + tipo + ']', new FormControl( filtro.descripcion, Validators.required));
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
