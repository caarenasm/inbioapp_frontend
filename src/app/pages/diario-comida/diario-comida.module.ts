import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioComidaPageRoutingModule } from './diario-comida-routing.module';

import { DiarioComidaPage } from './diario-comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioComidaPageRoutingModule
  ],
  declarations: [DiarioComidaPage]
})
export class DiarioComidaPageModule {}
