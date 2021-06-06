import { Component, OnInit } from '@angular/core';
import { IonLabel, NavController } from '@ionic/angular';

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
            inAyuda: true,
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
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Nunca',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Todos los días',
            inAyuda: true,
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
            ayuda: ''
          },
          {
            descripcion: 'Comidas dulces',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Comidas saladas',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Comidas fritas y bebidas con gas',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Comidas frías y heladas',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Carnes rojas?',
            inAyuda: false,
            ayuda: ''
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
            ayuda: ''
          },
          {
            descripcion: 'Actividades de resistencia y cardio?',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Me siento comodo(a) con las dos actividades físicas anteriores',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Actividades de alto rendimiento?',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Ninguna, no practico deporte actualmente',
            inAyuda: true,
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
            inAyuda: true,
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
            ayuda: ''
          },
          {
            descripcion: 'Enfermedades cardiovasculares?',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Enfermedades respiratorias?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Enfermedades autoinmunes?',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Enfermedades musculares, óseas y/o articulares?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Enfermedades neuropsicologícas?',
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
            descripcion: 'Otras',
            inAyuda: true,
            ayuda: ''
          }
       ]
     },
     {
      pregunta: '¿Tienes alguna dieta especial?',
      descripcion: 'Una dieta saludable fortalece el sistema inmune, mejora nuestro sistema digestivo y nuestro estado de ánimo',
      inInicio: false,
      nuOrden: 6,
      inComentario: true,
      tipoRespuesta: 1,
      respuesta: [
          {
            descripcion: 'Si, soy vegetariano(a)',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Si, soy vegano(a)',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'No, como casi de todo',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Otra',
            inAyuda: false,
            ayuda: ''
          }
       ]
     },
     {
      pregunta: '¿¿Qué alimentos o productos basados en ese tipo de comida te causan alergias?',
      descripcion: 'Cambiar nuestra alimentación por comida órganica nos ayuda a entender de dónde proviene las alergias alimenticias',
      inInicio: false,
      nuOrden: 7,
      inComentario: true,
      tipoRespuesta: 2,
      respuesta: [
          {
            descripcion: 'Alimentos que contienen gluten?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Crustáceos?',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Huevos?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Pescado',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Maní',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Soya',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Lácteos?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Frutos secos?',
            inAyuda: false,
            ayuda: ''
          }
       ]
     },
     {
      pregunta: '¿Cuantas deposiciones haces al día?',
      descripcion: 'La frecuencia, forma, color y olor de las heces nos ayudan a descubrir si tienes algún problema de salud',
      inInicio: false,
      nuOrden: 8,
      inComentario: true,
      tipoRespuesta: 1,
      respuesta: [
          {
            descripcion: '3 veces por semana',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Día de por medio',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: '1 vez al día',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: '2 veces al día',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: '3 veces al día',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Más de 3 veces al día',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Entre 5 y 10 veces al día',
            inAyuda: true,
            ayuda: ''
          }
       ]
     },
     {
      pregunta: '¿Cuánta agua tomas al día?',
      descripcion: 'Beber agua es fundamental para tener efectos positivos en nuestra salud',
      inInicio: false,
      nuOrden: 9,
      inComentario: true,
      tipoRespuesta: 1,
      respuesta: [
          {
            descripcion: 'Menos de 1L',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'De 1L a 2L',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Más de 2L',
            inAyuda: true,
            ayuda: ''
          }
       ]
     },
     {
      pregunta: '¿Ingieres suplementos nutricionales?',
      descripcion: 'Combinar una dieta equilibrada equilibrada con suplementos crea un estilo de vida saludable',
      inInicio: false,
      nuOrden: 10,
      inComentario: true,
      tipoRespuesta: 2,
      respuesta: [
          {
            descripcion: 'Productos Inbionova?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Minerales?',
            inAyuda: false,
            ayuda: ''
          },
          {
            descripcion: 'Vitaminas?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Aminoácidos esenciales?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Proteínas?',
            inAyuda: true,
            ayuda: ''
          },
          {
            descripcion: 'Fermentos o microorganismos?',
            inAyuda: true,
            ayuda: ''
          }         
       ]
     }
  ];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

}
