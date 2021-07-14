import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegistroService } from 'src/app/services/registro.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  estaturaActual = 0;
  pesoActual = 0;
  pesoDeseado = 0;
  menosEstaturaDisabled = false;
  menosPesoDisabled = false;
  menosPesoDeseadoaDisabled = false;

  todo: FormGroup;
  quiz: any;

  customPickerOptions = {
    buttons: [
      {
        text: 'Cancelar',
        handler: () => {
          console.log('Cancelar!');
          return false;
        }
      },
      {
        text: 'Seleccionar',
        handler: (time) => {
          console.log('time', time);
          /*const year: string = time.year.text;
          const month: string = time.month.value < 10 ? '0' + time.month.value.toString(): time.month.value.toString();*/
          const day: string = time.day.text;
          return true;
        }
      },
    ]
  };

  constructor(
          private alertCtrl: AlertController,
          private formBuilder: FormBuilder,
          private zone: NgZone,
          private registroCtrl: RegistroService,
          private loadingController: LoadingController,
          private toastCtrl: ToastController,
          private route: ActivatedRoute,
          private router: Router,
          private loadingServ: LoadingService
        ) {

          this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
              this.quiz = this.router.getCurrentNavigation().extras.state.quiz;
            }
          });

          this.crearFormulario();

  }

  ngOnInit() {

    if(!this.quiz){
      this.router.navigate(['quiz']);
    }
   }

  get sexoNoValido() {
    return this.todo.get('sexo').invalid && this.todo.get('sexo').touched;
  }

  get diaNoValido() {
    return this.todo.get('dia').invalid && this.todo.get('dia').touched;
  }

  get mesNoValido() {
    return this.todo.get('mes').invalid && this.todo.get('mes').touched;
  }

  get anioNoValido() {
    return this.todo.get('anio').invalid && this.todo.get('anio').touched;
  }

  get nombreNoValido() {
    return this.todo.get('nombre').invalid && this.todo.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.todo.get('apellido').invalid && this.todo.get('apellido').touched;
  }

  get emailNoValido() {
    return this.todo.get('email').invalid && this.todo.get('email').touched;
  }

  get terminosNoValido() {
    return this.todo.get('terminos').invalid && this.todo.get('terminos').touched;
  }

  get estaturaNoValido() {
    return this.todo.get('estatura').invalid && this.todo.get('estatura').touched;
  }

  get pesoActualNoValido() {
    return this.todo.get('peso_actual').invalid && this.todo.get('peso_actual').touched;
  }

  get pesoDeseadoNoValido() {
    return this.todo.get('peso_deseado').invalid && this.todo.get('peso_deseado').touched;
  }

  crearFormulario() {

    this.todo = this.formBuilder.group({
      sexo: ['', Validators.required],
      dia: ['', Validators.required],
      mes: ['', Validators.required],
      anio: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      terminos: [false, Validators.pattern('true')],
      estatura: ['0', Validators.required],
      peso_actual: ['0', Validators.required],
      peso_deseado: ['0', Validators.required],
      quiz: [this.quiz],
    });

  }

  getDia(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.todo.get('dia').setValue(date, {
       onlyself: true
    });
  }

  getMes(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.todo.get('mes').setValue(date, {
       onlyself: true
    });
  }

  getAnio(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.todo.get('anio').setValue(date, {
       onlyself: true
    });
  }

  masEstatura() {
    if( this.estaturaActual >= 0){
      this.menosEstaturaDisabled = false;
    }
    this.estaturaActual += 1;
  }

  menosEstatura() {

    if( this.estaturaActual < 1){
      this.menosEstaturaDisabled = true;
      return
    }else{
      this.menosEstaturaDisabled = false;
    }

    this.estaturaActual -= 1;

  }

  masPeso() {
    if( this.pesoActual >= 0){
      this.menosPesoDisabled = false;
    }
    this.pesoActual += 1;
  }

  menosPeso() {

    if( this.pesoActual < 1){
      this.menosPesoDisabled = true;
      return;
    }else{
      this.menosPesoDisabled = false;
    }

    this.pesoActual -= 1;
  }

  masPesoDeseado() {
    if( this.pesoDeseado >= 0){
      this.menosPesoDeseadoaDisabled = false;
    }
    this.pesoDeseado += 1;
  }

  menosPesoDeseado() {

    if( this.pesoDeseado < 1){
      this.menosPesoDeseadoaDisabled = true;
      return
    }else{
      this.menosPesoDeseadoaDisabled = false;
    }

    this.pesoDeseado -= 1;
  }

  async presentToast(msg) {

    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      duration: 2000,
      //color:'light',
      cssClass: 'ion-toast'
    });

    toast.present();
  }

  async alertaCheck() {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      message: 'Debes aceptar los términos y condiciones de privacidad para completar tu registro',
      cssClass:'alerta',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
        }
      ]
    });

    await alert.present();

  }

  async confirmar() {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Estas seguro que deseas continuar?',
      message: 'Ten en cuenta que los datos suministrados anteriormente no pueden ser cambiados o editados posteriormente.',
      cssClass:'alerta',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
        },
        {
          text: 'Continuar',
          cssClass:'alerta-boton-aceptar',
          handler: () => {
            this.postDatos();
          }
        }
      ]
    });

    await alert.present();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por Favor Espere...',
      translucent: true,
      cssClass: 'cargando',
    });
    return await loading.present();
  }

  guardar() {

    if ( this.todo.controls.terminos.invalid ){
      this.alertaCheck();
    }

    if ( this.todo.invalid ) {

      this.presentToast('Por Favor, verifique datos del formulario!');

      return Object.values( this.todo.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
      });
    }

    this.confirmar();

  }

  /*postDatos2() {
    const datos = { nombre: 'Edu', email: 'edu.revilla.vaquero@gmail.com'};
    const datos = this.todo.value;
  
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
  
    const url = 'http://httpbin.org/post';
  
    return this.http.post(url, JSON.stringify(datos), options).toPromise();
    return this.http.post(url, JSON.stringify(datos), options).toPromise();
  }*/

  postDatos() {

    /*console.log(this.todo.value);*/
    /*this.presentLoading();*/
    this.loadingServ.cargando();

    this.registroCtrl.createUsuario(this.todo.value)
      .subscribe((response) => {
        /*this.loadingController.dismiss();*/
        this.loadingServ.dismissLoader();
        this.zone.run(() => {
          //this.todo.reset();
          //this.router.navigate(['/login']);
        });
      }, error => {
          //console.error(error);
          this.presentToast('error');
      }
    );
  }

}
