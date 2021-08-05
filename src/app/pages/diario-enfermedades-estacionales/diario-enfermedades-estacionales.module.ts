import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioEnfermedadesEstacionalesPageRoutingModule } from './diario-enfermedades-estacionales-routing.module';

import { DiarioEnfermedadesEstacionalesPage } from './diario-enfermedades-estacionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioEnfermedadesEstacionalesPageRoutingModule
  ],
  declarations: [DiarioEnfermedadesEstacionalesPage]
})
export class DiarioEnfermedadesEstacionalesPageModule {}
