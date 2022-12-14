import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MisDatosDetallePage } from '../mis-datos-detalle/mis-datos-detalle.page';

import { MisDatosService } from '../../services/mis-datos.service';

export interface Cuenta {
  id: string;
  name: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  profile_photo_path: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  sexo_id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fecha_nacimiento: string;
  nombre: string;
  estatura: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  peso_actual: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  peso_deseado: string;
  imc: string;
  tdee: string;
  pgc: string;
  objetivo: string;
  plan: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  profile_photo_url: string;
}

export interface Consulta {
  descripcion: string;
  icon: string;
  respuesta: string;
  resultado: string[];
}

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {

  estrella = 'star-outline';
  resp: any;

  consultas: Consulta[] = [
    {
      descripcion: 'Estado del Sueño',
      icon: 'add-circle',
      respuesta: 'Duermo muy bien y me levanto descansado',
      resultado: [
        'Bien por ti! Esto demuestra que la hormona del sueño está funcionando bien.',
        'Tu nutrición esta siendo adecuada para proveerte una calidad del sueño.',
        'Durante el sueño el organismo se regenera, se estimula el buen funcionamiento de los sistemas inmunitario y hormonal.'
      ]
      //resultado:[ 'Estado del Sueño','concat']
    },
    {
      descripcion: 'Antojos',
      icon: 'add-circle',
      respuesta: 'Todos los días',
      resultado: ['Oh No! Muchos tipos de antojos están relacionados con la parte psicológica: las emociones y el deseo, por ejemplo para calmar el estrés y reducir la.']
    },
    {
      descripcion: 'Antojos más Comunes',
      icon: 'add-circle',
      respuesta: 'Comidas con carbohidratos',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Actividades Físicas',
      icon: 'add-circle',
      respuesta: 'Me siento cómodo(a) con las dos actividades físicas anteriores',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Enfermedades',
      icon: 'add-circle',
      respuesta: 'Enfermedades cardiovasculares',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Dieta Especial',
      icon: 'add-circle',
      respuesta: 'No, como casi de todo',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Desposiciones',
      icon: 'add-circle',
      respuesta: '1 vez al día',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Consumo de Agua',
      icon: 'add-circle',
      respuesta: 'De 1L a 2L',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Suplementos',
      icon: 'add-circle',
      respuesta: 'Bioproductos Inbionova',
      resultado: ['Oh No!']
    }
  ];

  datos: any;

  constructor(
    private modalCtrl: ModalController,
    private misDatosServ: MisDatosService
    ) { }

  ngOnInit() {

    this.misDatosServ.getLista().subscribe(
      response => {
        this.datos = response;
      }
    );

    /*this.usuarioServ.getUsuario({ id_usuario: 2}).subscribe(
      response => {

        this.resp = response;
        this.datos = this.resp.data[0];

        console.log(this.datos);
      },
      error => {
        console.log(error);
      }
    );*/

  }

  async mostrarDetalle( info?) {

    //console.log(datos);

    const modal = await this.modalCtrl.create({
      component: MisDatosDetallePage,
      componentProps: {
        datos: info
      }
    });

    await modal.present();

    // const { data } = await modal.onDidDismiss();
    const { data } = await modal.onWillDismiss();
    //console.log('onWillDismiss');
    //console.log(data);

  }

  favorito() {
    this.estrella = 'star';
  }

}
