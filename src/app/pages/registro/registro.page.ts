import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  estaturaActual = 0;
  pesoActual = 0;
  pesoDeseado = 0;

  constructor() { }

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

}
