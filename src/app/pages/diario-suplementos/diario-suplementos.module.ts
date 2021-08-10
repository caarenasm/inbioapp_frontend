import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioSuplementosPageRoutingModule } from './diario-suplementos-routing.module';

import { DiarioSuplementosPage } from './diario-suplementos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioSuplementosPageRoutingModule
  ],
  declarations: [DiarioSuplementosPage]
})
export class DiarioSuplementosPageModule {}
