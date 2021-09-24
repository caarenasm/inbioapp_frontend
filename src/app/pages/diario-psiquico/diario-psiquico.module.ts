import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioPsiquicoPageRoutingModule } from './diario-psiquico-routing.module';

import { DiarioPsiquicoPage } from './diario-psiquico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioPsiquicoPageRoutingModule
  ],
  declarations: [DiarioPsiquicoPage]
})
export class DiarioPsiquicoPageModule {}
