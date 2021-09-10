import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
//import { DiarioNutricionalPreguntaPage } from '../diario-nutricional-pregunta/diario-nutricional-pregunta.page';
// Send Parameter
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-diario-nutricional',
  templateUrl: './diario-nutricional.page.html',
  styleUrls: ['./diario-nutricional.page.scss'],
})
export class DiarioNutricionalPage implements OnInit {

  optionsRange: CalendarComponentOptions = {
    monthPickerFormat: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
    weekStart: 1,
  };

  constructor(
    private modalCtrl: ModalController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async mostrarPregunta( $event) {

    const navigationExtras: NavigationExtras = { state: { fecha: $event } };
    this.router.navigate(['diario-nutricional-pregunta'], navigationExtras);

    /*const modal = await this.modalCtrl.create({
      component: DiarioNutricionalPreguntaPage,
      componentProps: {
        fecha: $event
      }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();*/

  }

}
