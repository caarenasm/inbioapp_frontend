import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioDeposicionesPageRoutingModule } from './diario-deposiciones-routing.module';

import { DiarioDeposicionesPage } from './diario-deposiciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioDeposicionesPageRoutingModule
  ],
  declarations: [DiarioDeposicionesPage]
})
export class DiarioDeposicionesPageModule {}
