import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PopoverController } from '@ionic/angular';
import { InfoAyudaComponent } from '../../components/info-ayuda/info-ayuda.component';
import {Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { QuizService } from 'src/app/services/quiz.service';
import { AlertService } from '../../services/alert.service';

export interface Respuesta {
  id: number;
  respuesta: string;
  ayuda: string;
  otro: string;
}

export interface Quiz {
  id: number;
  pregunta: string;
  icono: string;
  descripcion: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  tipo_respuestas: number;
  respuestas: Respuesta[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  resp: any;
  total = 0;
  progreso = 0;
  ocultar = [];
  textoSiguente = 'Siguiente';
  iconoSiguente = 'icon-adelante';
  mostrarAnterior = false;

  quiz: Quiz[];

  todo: FormGroup;

  constructor(
    private popoverCtrl: PopoverController,
    private quizServ: QuizService,
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    ) {
      this.crearFormulario();
     }

  ngOnInit() {
    this.armarQuiz();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miQuiz') slides: IonSlides;

  //onViewWillEnter() {
  armarQuiz() {
    this.quizServ.getQuiz().subscribe(
      response => {

        this.resp = response;
        this.total = this.resp.total;
        this.quiz = this.resp.data;

        for (let i = 0; i < this.quiz.length; i++) {
          if (this.quiz[i].tipo_respuestas === 1) {
            this.todo.addControl('respuesta[' + i + ']', new FormControl('', Validators.required));
            this.quiz[i].respuestas.forEach(element => {
              if (element.otro) {
                this.todo.addControl('otro[' + i + ']', new FormControl(''));
              }
            });
          }
          if(this.quiz[i].tipo_respuestas === 2){
            this.todo.addControl('respuesta[' + i + ']', new FormArray([], [Validators.required]));
          }
        }

      }, (err) => {
        console.log('err');
      }
    );
  }

  crearFormulario() {

    this.todo = this.formBuilder.group({
      /*simple: ['', Validators.required],
      multiple: this.formBuilder.array([], [Validators.required])*/
    });

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    /*for (let i = 0; i < 12; i++) {
      this.todo.addControl('respuesta[' + i + ']', new FormControl('', Validators.required));
    }*/
    /*this.todo.addControl('respuesta[' + i + ']', new FormArray([], [Validators.required]));*/

  }

  onCheckboxChange(e, i) {
    //const checkArray: FormArray = this.todo.get('multiple') as FormArray;
    const checkArray: FormArray = this.todo.get('respuesta[' + i + ']') as FormArray;

    if (e.target.checked === false) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  async infoAyuda(ev: any, message) {

    const popover = await this.popoverCtrl.create({
      component: InfoAyudaComponent,
      event: ev,
      componentProps: {
        msg: message
      },
      translucent: true,
      backdropDismiss: true
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

  }

  avanze( i: any ){

    this.progreso = i + 1;
    const conteo = this.progreso / this.total;

    return conteo;

  }

  slideChanged() {
    const me = this;
    me.slides.isEnd().then((istrue) => {
      /*console.log(istrue);*/
      if (istrue) {
        me.textoSiguente = 'Finalizar';
        me.iconoSiguente = 'icon-mi_diario_nutricional';
      } else {
        me.textoSiguente = 'Siguiente';
        me.iconoSiguente = 'icon-adelante';
      }
    });

    me.slides.isBeginning().then((istrue) => {
      /*console.log(istrue);*/
      if (istrue) {
        me.mostrarAnterior = false;
      } else {
        me.mostrarAnterior = true;
      }
    });
}

  siguiente() {

    this.slides.getActiveIndex().then(index => {
      if ( this.todo.get('respuesta[' + index + ']').invalid ){
        this.alertServ.presentAlert('Por Favor, seleccione una opcion del formulario!');
      }else{
        this.slides.slideNext();
      }
   });

    /*if ( this.todo.invalid ){

      this.alertServ.presentAlert('Por Favor, seleccione una opcion del formulario!');

      return Object.values( this.todo.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }*/

    console.log(this.todo.value);

    //this.slides.slideNext();
  }

  mostrar(i: any, otro: any) {

    if (otro === 1) {
      this.ocultar[i] = true;
    }else{
      this.ocultar[i] = false;
    }
  }

}
