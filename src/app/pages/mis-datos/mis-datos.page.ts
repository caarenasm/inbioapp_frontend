import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MisDatosDetallePage } from '../mis-datos-detalle/mis-datos-detalle.page';

export interface Datos {
  nombre: string;
  genero: string;
  fechaNac: string;
  estatura: string;
  miObjetivo: string;
  pesoActual: string;
  pesoDeseado: string;
  imc: string;
  tdee: string;
  pcg: string;
  miPlan: string;
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

  datos : Datos = {
      nombre: 'Pedro Perez',
      genero: 'Masculino',
      fechaNac: '12.10.1978',
      estatura: '1.65',
      miObjetivo: 'Bajar de peso',
      pesoActual: '80 kg',
      pesoDeseado: '60 Kg',
      imc: '53,64 - obesidad',
      tdee: '1.824 Kcal',
      pcg: '40/40/20',
      miPlan: 'Plan Saludable'
  };

  consultas: Consulta[] = [
    {
      descripcion: 'Estado del Sueño',
      icon: 'add',
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
      icon: 'add',
      respuesta: 'Todos los días',
      resultado: ['Oh No! Muchos tipos de antojos están relacionados con la parte psicológica: las emociones y el deseo, por ejemplo para calmar el estrés y reducir la.']
    },
    {
      descripcion: 'Antojos más Comunes',
      icon: 'add',
      respuesta: 'Comidas con carbohidratos',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Actividades Físicas',
      icon: 'add',
      respuesta: 'Me siento cómodo(a) con las dos actividades físicas anteriores',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Enfermedades',
      icon: 'add',
      respuesta: 'Enfermedades cardiovasculares',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Dieta Especial',
      icon: 'add',
      respuesta: 'No, como casi de todo',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Desposiciones',
      icon: 'add',
      respuesta: '1 vez al día',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Consumo de Agua',
      icon: 'add',
      respuesta: 'De 1L a 2L',
      resultado: ['Oh No!']
    },
    {
      descripcion: 'Suplementos',
      icon: 'add',
      respuesta: 'Bioproductos Inbionova',
      resultado: ['Oh No!']
    }
  ];

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async mostrarDetalle( datos?) {

    //console.log(datos);

    const modal = await this.modalCtrl.create({
      component: MisDatosDetallePage,
      componentProps: {
        datos: datos
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
