import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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

}
