import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisDatosDetallePageRoutingModule } from './mis-datos-detalle-routing.module';

import { MisDatosDetallePage } from './mis-datos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisDatosDetallePageRoutingModule
  ],
  declarations: [MisDatosDetallePage]
})
export class MisDatosDetallePageModule {}
