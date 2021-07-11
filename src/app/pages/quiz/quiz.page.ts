import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonLabel, IonSlides, NavController, PopoverController } from '@ionic/angular';
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

  quiz: Quiz[];

  todo: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    private quizServ: QuizService,
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    ) {
      this.crearFormulario();
     }

  ngOnInit() {
    //this.avanze();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('miQuiz') slides: IonSlides;

  ionViewWillEnter() {
    this.quizServ.getQuiz().subscribe(
      response => {

        this.resp = response;
        this.total = this.resp.total;
        this.quiz = this.resp.data;
      }, (err) => {
        console.log('err');
      }
    );
  }

  crearFormulario() {

    this.todo = this.formBuilder.group({
      simple: ['', Validators.required],
      multiple: this.formBuilder.array([])
    });

  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.todo.get('multiple') as FormArray;

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

  siguiente() {

    if ( this.todo.invalid ){

      this.alertServ.presentAlert('Por Favor, seleccione una opcion del formulario!');

      return Object.values( this.todo.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }

    console.log(this.todo.value);

    this.slides.slideNext();
  }

  checkValue(event: any) {
    console.log(event.detail.value);
  }

}
