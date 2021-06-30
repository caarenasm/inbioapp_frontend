import { Component, OnInit } from '@angular/core';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';

import { UsuarioService } from "../../services/usuario.service";

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

  datos : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioServ: UsuarioService
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

    console.log(this.datos.value);

    this.usuarioServ.getLogin( this.datos.value ).subscribe(
      response => {
        
        this.resp = response;
        this.datos = this.resp.data[0];

        console.log(this.datos);
      },
      error => {
        console.log(error);
      }
    );

  }

}
