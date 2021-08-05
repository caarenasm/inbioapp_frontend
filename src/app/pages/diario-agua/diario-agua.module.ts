import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioAguaPageRoutingModule } from './diario-agua-routing.module';

import { DiarioAguaPage } from './diario-agua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioAguaPageRoutingModule
  ],
  declarations: [DiarioAguaPage]
})
export class DiarioAguaPageModule {}
