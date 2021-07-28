import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioSuenoPageRoutingModule } from './diario-sueno-routing.module';

import { DiarioSuenoPage } from './diario-sueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioSuenoPageRoutingModule
  ],
  declarations: [DiarioSuenoPage]
})
export class DiarioSuenoPageModule {}
