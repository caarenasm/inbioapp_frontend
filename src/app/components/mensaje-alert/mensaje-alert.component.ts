import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mensaje-alert',
  templateUrl: './mensaje-alert.component.html',
  styleUrls: ['./mensaje-alert.component.scss'],
})
export class MensajeAlertComponent implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  export(){
    this.presentAlert
  }

  ngOnInit() {}

  async presentAlert(){
    const alert = await this.alertController.create({
      header: "Borrar",
      message: "¿Esta seguro?",
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No borrado(a)")
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log("Borrado(a)")
          }
        }
    ]
    });
    
    await alert.present()
    let result = await  alert.onDidDismiss();
    console.log(result);
  }

}
