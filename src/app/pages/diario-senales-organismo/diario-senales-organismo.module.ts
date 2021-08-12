import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioSenalesOrganismoPageRoutingModule } from './diario-senales-organismo-routing.module';

import { DiarioSenalesOrganismoPage } from './diario-senales-organismo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioSenalesOrganismoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioSenalesOrganismoPage]
})
export class DiarioSenalesOrganismoPageModule {}
