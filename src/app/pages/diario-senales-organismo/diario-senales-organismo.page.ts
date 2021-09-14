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
      id: 1,
      descripcion: 'Mareo',
      icon: 'icon-mareo'
    },
    {
      id: 2,
      descripcion: 'Desmayo',
      icon: 'icon-desmayo'
    },
    {
      id: 3,
      descripcion: 'Perdida de libido',
      icon: 'icon-perdida_libido'
    },
    {
      id: 4,
      descripcion: 'Vena Varice',
      icon: 'icon-vena_varice'
    },
    {
      id: 5,
      descripcion: 'Sed',
      icon: 'icon-sed'
    },
    {
      id: 6,
      descripcion: 'Hambre',
      icon: 'icon-hambre'
    },
    {
      id: 7,
      descripcion: 'Infeccion urinaria',
      icon: 'icon-infeccion_urinaria'
    },
    {
      id: 8,
      descripcion: 'Hemorroides',
      icon: 'icon-hemorroides'
    },
    {
      id: 9,
      descripcion: 'Dificultad para respirar',
      icon: 'icon-dificultad_respirar'
    },
    {
      id: 10,
      descripcion: 'Sudoracion exesiva',
      icon: 'icon-sudoracion_excesiva'
    },
    {
      id: 11,
      descripcion: 'Escalofrios',
      icon: 'icon-escalofrios'
    },
    {
      id: 12,
      descripcion: 'Fiebre',
      icon: 'icon-fiebre'
    },
    {
      id: 13,
      descripcion: 'Inflamacion en los ganglios',
      icon: 'icon-inflamacion_ganglios'
    },
    {
      id: 14,
      descripcion: 'Exposicion a gases/contaminacion/polvo/polen',
      icon: 'icon-polen'
    },
    {
      id: 15,
      descripcion: 'Sangrado',
      icon: 'icon-sangradp'
    },
    {
      id: 16,
      descripcion: 'Falta de apetito',
      icon: 'icon-falta_apetito'
    },
    {
      id: 17,
      descripcion: 'Perdida de peso',
      icon: 'icon-perdida_peso'
    },
    {
      id: 18,
      descripcion: 'Aumento de peso',
      icon: 'icon-aumentar-peso'
    },
    {
      id: 19,
      descripcion: 'Perdida de masa muscular',
      icon: 'icon-perdida_masa_muscular'
    },
    {
      id: 20,
      descripcion: 'Caida del pelo',
      icon: 'icon-perdida_pelo'
    },
    {
      id: 21,
      descripcion: 'Crecimiento de vello',
      icon: 'icon-crecimiento_vello'
    },
    {
      id: 22,
      descripcion: 'Perdida de fuerza',
      icon: 'icon-perdida_fuerza'
    },
    {
      id: 23,
      descripcion: 'Mala memoria',
      icon: 'icon-memory'
    },
    {
      id: 24,
      descripcion: 'Mala concentracion',
      icon: 'icon-mala_concentracion'
    },
    {
      id: 25,
      descripcion: 'Mal equilibrio',
      icon: 'icon-mal_equilibrio'
    },
    {
      id: 26,
      descripcion: 'Convulciones',
      icon: 'icon-convulciones'
    },
    {
      id: 27,
      descripcion: 'Problema de habla',
      icon: 'icon-problema_habla'
    },
    {
      id: 28,
      descripcion: 'Hiperactividad',
      icon: 'icon-hiperactividad'
    },
    {
      id: 29,
      descripcion: 'Letardo',
      icon: 'icon-letargo'
    },
    {
      id: 30,
      descripcion: 'Fatiga',
      icon: 'icon-fatiga'
    },
    {
      id: 31,
      descripcion: 'Menstruacion abundante',
      icon: 'icon-menstruacion_abundante'
    },
    {
      id: 32,
      descripcion: 'Infertilidad',
      icon: ' icon-infertilidad'
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
