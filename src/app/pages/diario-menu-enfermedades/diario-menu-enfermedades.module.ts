import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioMenuEnfermedadesPageRoutingModule } from './diario-menu-enfermedades-routing.module';

import { DiarioMenuEnfermedadesPage } from './diario-menu-enfermedades.page';
import { ComponentsModule } from '../../components/components.module';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioMenuEnfermedadesPageRoutingModule,
    ComponentsModule,
    CalendarModule
  ],
  declarations: [DiarioMenuEnfermedadesPage]
})
export class DiarioMenuEnfermedadesPageModule {}
