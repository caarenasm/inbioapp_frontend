import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioIncomodidadAlimentoPageRoutingModule } from './diario-incomodidad-alimento-routing.module';

import { DiarioIncomodidadAlimentoPage } from './diario-incomodidad-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioIncomodidadAlimentoPageRoutingModule
  ],
  declarations: [DiarioIncomodidadAlimentoPage]
})
export class DiarioIncomodidadAlimentoPageModule {}
