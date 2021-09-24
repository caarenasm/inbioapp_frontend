import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-diario-psiquico',
  templateUrl: './diario-psiquico.page.html',
  styleUrls: ['./diario-psiquico.page.scss'],
})
export class DiarioPsiquicoPage implements OnInit {

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

  cerrar() {
    //this.modalCtrl.dismiss();
    this.location.back();
  }

}
