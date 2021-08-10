import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioSuplementosPageRoutingModule } from './diario-suplementos-routing.module';

import { DiarioSuplementosPage } from './diario-suplementos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioSuplementosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioSuplementosPage]
})
export class DiarioSuplementosPageModule {}
