import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioVisionPageRoutingModule } from './diario-vision-routing.module';

import { DiarioVisionPage } from './diario-vision.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioVisionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioVisionPage]
})
export class DiarioVisionPageModule {}
