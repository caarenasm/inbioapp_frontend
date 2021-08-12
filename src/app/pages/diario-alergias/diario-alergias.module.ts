import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioAlergiasPageRoutingModule } from './diario-alergias-routing.module';

import { DiarioAlergiasPage } from './diario-alergias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioAlergiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarioAlergiasPage]
})
export class DiarioAlergiasPageModule {}
