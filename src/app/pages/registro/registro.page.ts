import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  estaturaActual = 0;
  pesoActual = 0;
  pesoDeseado = 0;

  todo : FormGroup;

  constructor( 
          private alertCtrl: AlertController,
          private formBuilder: FormBuilder 
        ) { 

          this.crearFormulario();

  }

  ngOnInit() {
  }

  get nombreNoValido() {
    return this.todo.get('nombre').invalid && this.todo.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.todo.get('apellido').invalid && this.todo.get('apellido').touched;
  }

  get correoNoValido() {
    return this.todo.get('correo').invalid && this.todo.get('correo').touched;
  }

  get terminosNoValido() {
    return this.todo.get('terminos').invalid && this.todo.get('terminos').touched;
  }

  crearFormulario() {

    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      terminos: [false, Validators.pattern('true')],
    });

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

  guardar(){
    console.log(this.todo.value)
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

    if ( this.todo.controls.terminos.invalid ){

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

    if ( this.todo.invalid ) {

      return Object.values( this.todo.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      });
     
    }

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
