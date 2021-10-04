import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPagePage } from '../login-page/login-page.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPagePage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    });

    return await modal.present();
  }

}
