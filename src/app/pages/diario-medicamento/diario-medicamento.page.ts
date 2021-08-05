import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-diario-medicamento',
  templateUrl: './diario-medicamento.page.html',
  styleUrls: ['./diario-medicamento.page.scss'],
})
export class DiarioMedicamentoPage implements OnInit {

  datos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.datos = this.formBuilder.group({
      tipo: [ 3, Validators.required],
      opcion: ['', Validators.required],
      tiempo: ['', Validators.required],
      lectura: ['', ],
    });
   }

  ngOnInit() {
  }

}
