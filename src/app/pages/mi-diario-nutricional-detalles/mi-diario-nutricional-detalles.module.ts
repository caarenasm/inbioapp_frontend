import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarModule } from 'ion2-calendar';

import { MiDiarioNutricionalDetallesPageRoutingModule } from './mi-diario-nutricional-detalles-routing.module';

import { MiDiarioNutricionalDetallesPage } from './mi-diario-nutricional-detalles.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiDiarioNutricionalDetallesPageRoutingModule,
    ComponentsModule,
    CalendarModule

  ],
  declarations: [MiDiarioNutricionalDetallesPage]
})
export class MiDiarioNutricionalDetallesPageModule {}
