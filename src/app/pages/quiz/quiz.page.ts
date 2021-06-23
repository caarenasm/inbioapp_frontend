import { Component, OnInit } from '@angular/core';
import { IonLabel, NavController, PopoverController } from '@ionic/angular';
import { InfoAyudaComponent } from '../../components/info-ayuda/info-ayuda.component';

export interface Respuesta {
  descripcion: string;
  inAyuda: boolean;
  ayuda: string;
}

export interface Quiz {
  pregunta: string;
  descripcion: string;
  inInicio: boolean;
  nuOrden: number;
  inComentario: boolean;
  tipoRespuesta: number;
  respuesta: Respuesta[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  progreso = 1;

  quiz: Quiz[] = [
    {
      pregunta: '¿Cómo duermes?',
      descripcion: 'Tu calidad de sueño es importante para el buen funcionamiento del cerebro y la memoria',
      inInicio: true,
      nuOrden: 1,
      inComentario: false,
      tipoRespuesta: 1,
      respuesta: [
          {
            descripcion: 'Duermo muy bien y me levanto descansado',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Me despierto una o más veces en la noche y me cuesta dormir de nuevo',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Padezco de insomnio',
            inAyuda: false,
            ayuda: ''
          }
      ]
    },
    {
      pregunta: '¿Con qué frecuencia tienes antojos?',
      descripcion: 'La frecuencia e intensidad con la que se presentan los antojos, contribuyen al peso corporal',
      inInicio: false,
      nuOrden: 2,
      inComentario: true,
      tipoRespuesta: 1,
      respuesta: [
          {
            descripcion: 'A veces',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Nunca',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Todos los días',
            inAyuda: false,
            ayuda: ''
          }
      ]
    },
    {
      pregunta: '¿Por cuales tipos de comida sientes antojo?',
      descripcion: 'Al saber lo que nuestro cuerpo nos pide, habla de cómo se encuentra nuestro organismo',
      inInicio: true,
      nuOrden: 3,
      inComentario: false,
      tipoRespuesta: 2,
      respuesta: [
          {
            descripcion: 'Comidas con carbohidratos?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Comidas dulces',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Comidas saladas',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Comidas fritas y bebidas con gas',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Comidas frías y heladas',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Carnes rojas?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          }
      ]
    },
    {
      pregunta: '¿Cuales actividades físicas te son más cómodas de practicar?',
      descripcion: 'Estar físicamente activo reduce en gran manera nuestros problemas de salud',
      inInicio: false,
      nuOrden: 4,
      inComentario: true,
      tipoRespuesta: 1,
      respuesta: [
          {
            descripcion: 'Actividades de fuerza y poder?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Actividades de resistencia y cardio?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Me siento comodo(a) con las dos actividades físicas anteriores',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Actividades de alto rendimiento?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Ninguna, no practico deporte actualmente',
            inAyuda: false,
            ayuda: ''
          }
       ]
     },
     {
      pregunta: '¿Padeces alguna de estas enfermedades?',
      descripcion: 'Una dieta equilibrada previene y mejora enfermedades existentes en nuestro cuerpo',
      inInicio: false,
      nuOrden: 5,
      inComentario: true,
      tipoRespuesta: 2,
      respuesta: [
          {
            descripcion: 'Diabetes tipo 1 o 2',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Cáncer',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Enfermedades alérgicas?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Enfermedades cardiovasculares?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Enfermedades respiratorias?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Enfermedades autoinmunes?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Enfermedades musculares, óseas y/o articulares?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          },
          {
            descripcion: 'Enfermedades neuropsicologícas?',
            inAyuda: true,
            ayuda: 'Texto de Ayuda'
          }
       ]
     },
  ];

  constructor( 
    private navCtrl: NavController,
    private popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    this.avanze();
  }

  async infoAyuda(ev: any, msg) {
    
    const popover = await this.popoverCtrl.create({
      component: InfoAyudaComponent,
      event: ev,
      componentProps: {
        msg: msg
      },
      translucent: true,
      backdropDismiss: true
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

  }

  avanze(){

    let conteo = this.progreso / 5;

    this.progreso = conteo;

  }

}
