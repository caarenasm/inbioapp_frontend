import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioDeportePageRoutingModule } from './diario-deporte-routing.module';

import { DiarioDeportePage } from './diario-deporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioDeportePageRoutingModule
  ],
  declarations: [DiarioDeportePage]
})
export class DiarioDeportePageModule {}
