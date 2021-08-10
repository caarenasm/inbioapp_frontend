import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioDeposicionesPageRoutingModule } from './diario-deposiciones-routing.module';

import { DiarioDeposicionesPage } from './diario-deposiciones.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioDeposicionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioDeposicionesPage]
})
export class DiarioDeposicionesPageModule {}
