import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioDeposicionesDetallesPageRoutingModule } from './diario-deposiciones-detalles-routing.module';

import { DiarioDeposicionesDetallesPage } from './diario-deposiciones-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioDeposicionesDetallesPageRoutingModule
  ],
  declarations: [DiarioDeposicionesDetallesPage]
})
export class DiarioDeposicionesDetallesPageModule {}
