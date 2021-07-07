import { Component, OnInit } from '@angular/core';
import { IonLabel, NavController, PopoverController } from '@ionic/angular';
import { InfoAyudaComponent } from '../../components/info-ayuda/info-ayuda.component';

import { QuizService } from 'src/app/services/quiz.service';

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

  constructor(
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private quizServ: QuizService
    ) { }

  ngOnInit() {
    //this.avanze();
  }

  ionViewWillEnter() {
    this.quizServ.getQuiz().subscribe(
      response => {

        this.resp = response;
        this.total = this.resp.total;
        this.quiz = this.resp.data;
      }
    );
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

  avanze( i ){

    this.progreso = i + 1;

    const conteo = this.progreso / this.total;

    return conteo;

  }

}
