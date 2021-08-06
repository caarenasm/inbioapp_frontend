import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioEnfermedadDetallePageRoutingModule } from './diario-enfermedad-detalle-routing.module';

import { DiarioEnfermedadDetallePage } from './diario-enfermedad-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioEnfermedadDetallePageRoutingModule
  ],
  declarations: [DiarioEnfermedadDetallePage]
})
export class DiarioEnfermedadDetallePageModule {}
