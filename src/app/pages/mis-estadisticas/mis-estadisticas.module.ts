import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { MisEstadisticasPageRoutingModule } from './mis-estadisticas-routing.module';

import { MisEstadisticasPage } from './mis-estadisticas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MisEstadisticasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MisEstadisticasPage]
})
export class MisEstadisticasPageModule {}
