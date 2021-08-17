import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioDolenciaCuerpoPageRoutingModule } from './diario-dolencia-cuerpo-routing.module';

import { DiarioDolenciaCuerpoPage } from './diario-dolencia-cuerpo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiarioDolenciaCuerpoPageRoutingModule
  ],
  declarations: [DiarioDolenciaCuerpoPage]
})
export class DiarioDolenciaCuerpoPageModule {}
