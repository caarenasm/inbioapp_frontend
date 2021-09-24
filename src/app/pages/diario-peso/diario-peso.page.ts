import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-diario-peso',
  templateUrl: './diario-peso.page.html',
  styleUrls: ['./diario-peso.page.scss'],
})
export class DiarioPesoPage implements OnInit {

  peso = 0;
  menosPesoDisabled = false;
  datos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertServ: AlertService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private location: Location
  ) {

    this.datos = this.formBuilder.group({
      tipo: [ 1, Validators.required],
    });

   }

  ngOnInit() {
  }

  masPeso() {
    if( this.peso >= 0){
      this.menosPesoDisabled = false;
    }
    this.peso += 1;
  }

  menosPeso() {

    if( this.peso < 1){
      this.menosPesoDisabled = true;
      return;
    }else{
      this.menosPesoDisabled = false;
    }

    this.peso -= 1;
  }

  cerrar() {
    //this.modalCtrl.dismiss();
    this.location.back();
  }

}
