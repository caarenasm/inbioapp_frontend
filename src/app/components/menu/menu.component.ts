import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private toastService: ToastService,
    private alertCtrl: AlertController,
    private loadingServ: LoadingService,
  ) { }

  ngOnInit() {}

  async cerrarSesion() {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Estas seguro que deseas salir?',
      cssClass:'alerta',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
        },
        {
          text: 'Salir',
          cssClass:'alerta-boton-aceptar',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();

  }

  logout() {
    this.loadingServ.cargando();
    this.authService.logout().subscribe(
      data => {
        this.loadingServ.dismissLoader();
        this.toastService.presentToast(data["message"]);
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/inicio');
      }
    );
  }

}
