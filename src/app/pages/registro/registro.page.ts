import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  estaturaActual = 0;
  pesoActual = 0;
  pesoDeseado = 0;

  constructor( private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  customPickerOptions = {
    buttons: [
      {
        text: 'Seleccionar',
        handler: ( event ) => {
          console.log(event);
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log('log!')
        }
      },
    ]
  }

  masEstatura() {
    this.estaturaActual += 1;
  }

  menosEstatura() {
    this.estaturaActual -= 1;
  }

  masPeso() {
    this.pesoActual += 1;
  }

  menosPeso() {
    this.pesoActual -= 1;
  }

  masPesoDeseado() {
    this.pesoDeseado += 1;
  }

  menosPesoDeseado() {
    this.pesoDeseado -= 1;
  }

  async alerta() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Estas seguro que deseas continuar?',
      message: 'Ten en cuenta que los datos suministrados anteriormente no pueden ser cambiados o editados posteriormente.',
      cssClass:'alerta',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
          handler: () => {
            console.log('click en ok!')
          }
        },
        {
          text: 'Continuar',
          role: 'cancel',
        }
      ]
    });

    await alert.present();
  }

}
