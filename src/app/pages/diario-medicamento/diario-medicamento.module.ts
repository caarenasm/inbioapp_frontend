import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioMedicamentoPageRoutingModule } from './diario-medicamento-routing.module';

import { DiarioMedicamentoPage } from './diario-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioMedicamentoPageRoutingModule
  ],
  declarations: [DiarioMedicamentoPage]
})
export class DiarioMedicamentoPageModule {}
