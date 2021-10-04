import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from '../../interfaces/usuario';

import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  email: string;
  password: string;
  isLogged: boolean;
  resp: any;

  datos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServ: AuthService,
    private toastServ: ToastService,
    private navCtrl: NavController,
    public modalCtrl: ModalController,
  ) { 
    this.validar();
  }

  ngOnInit() {
  }

  validar() {

    this.datos = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  get usuarioNoValido() {
    return this.datos.get('email').invalid && this.datos.get('email').touched;
  }

  get passNoValido() {
    return this.datos.get('password').invalid && this.datos.get('password').touched;
  }

  login(){

    if ( this.datos.invalid ) {
      this.toastServ.presentToast('Por Favor, verifique datos del formulario!');

      return Object.values( this.datos.controls ).forEach( cntrl => {
        if ( cntrl instanceof FormGroup ) {
          Object.values( cntrl.controls ).forEach( control => control.markAsTouched() );
        } else {
          cntrl.markAsTouched();
        }
      });
    }

    this.authServ.login( this.datos.value ).subscribe(
      response => {
        this.toastServ.presentToast(response["message"]);
      },
      error => {
        console.log(error.error);
        this.toastServ.presentToast('Error: Verifique sus datos!');
      },
      () => {
        this.navCtrl.navigateRoot('/objetivo');
      }
    );

  }

}
