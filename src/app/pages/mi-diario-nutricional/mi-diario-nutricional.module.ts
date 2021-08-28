import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';

import { MiDiarioNutricionalPageRoutingModule } from './mi-diario-nutricional-routing.module';

import { MiDiarioNutricionalPage } from './mi-diario-nutricional.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiDiarioNutricionalPageRoutingModule,
    ComponentsModule,
    CalendarModule
  ],
  declarations: [MiDiarioNutricionalPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})
export class MiDiarioNutricionalPageModule {}
