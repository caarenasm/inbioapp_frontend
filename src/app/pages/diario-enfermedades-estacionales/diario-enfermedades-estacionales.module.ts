import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioEnfermedadesEstacionalesPageRoutingModule } from './diario-enfermedades-estacionales-routing.module';

import { DiarioEnfermedadesEstacionalesPage } from './diario-enfermedades-estacionales.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioEnfermedadesEstacionalesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioEnfermedadesEstacionalesPage]
})
export class DiarioEnfermedadesEstacionalesPageModule {}
