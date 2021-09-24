import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioPesoPageRoutingModule } from './diario-peso-routing.module';

import { DiarioPesoPage } from './diario-peso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioPesoPageRoutingModule
  ],
  declarations: [DiarioPesoPage]
})
export class DiarioPesoPageModule {}
