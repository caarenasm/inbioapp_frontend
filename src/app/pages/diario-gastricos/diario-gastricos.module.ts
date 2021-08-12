import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioGastricosPageRoutingModule } from './diario-gastricos-routing.module';

import { DiarioGastricosPage } from './diario-gastricos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioGastricosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioGastricosPage]
})
export class DiarioGastricosPageModule {}
