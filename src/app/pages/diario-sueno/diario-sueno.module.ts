import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioSuenoPageRoutingModule } from './diario-sueno-routing.module';

import { DiarioSuenoPage } from './diario-sueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioSuenoPageRoutingModule
  ],
  declarations: [DiarioSuenoPage]
})
export class DiarioSuenoPageModule {}
