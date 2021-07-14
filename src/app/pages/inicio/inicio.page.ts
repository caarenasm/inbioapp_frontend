import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slides: { img: string, titulo: string, entrar: boolean, color: string }[] = [
    {
      img: '/assets/img/Intro_1.png',
      titulo: 'Empodérate de tu nutrición y la de tu familia.',
      entrar: false,
      color: 'background-color:white'
    },
    {
      img: '/assets/img/Intro_2.png',
      titulo: 'Empieza un estilo de vida saludable y sostenible.',
      entrar: false,
      color: 'background-color:white'
    },
    {
      img: '/assets/img/Intro_3.png',
      titulo: 'Disfruta de una atención personalizada e instantánea.',
      entrar: false,
      color: 'background-color:white'
    },
  ];
  

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
     ) { }

  ngOnInit() {
  }

  onClick() {

    this.navCtrl.navigateBack('/');

  }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/menu');
      }
    });
  }


}
