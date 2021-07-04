import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from '../../interfaces/usuario';

import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  isLogged: boolean;
  resp: any;

  datos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServ: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
  ) {

    this.validar();

   }

   validar() {

    this.datos = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit() {


  }

  login(){

    this.authServ.login( this.datos.value ).subscribe(
      response => {
        this.alertService.presentToast(response["message"]);
      },
      error => {
        console.log(error.error);
        this.alertService.presentToast('Error: Verifique sus datos!');
      },
      () => {
        this.navCtrl.navigateRoot('/mis-datos');
      }
    );

  }

}