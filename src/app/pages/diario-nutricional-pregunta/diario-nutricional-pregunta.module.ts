import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioNutricionalPreguntaPageRoutingModule } from './diario-nutricional-pregunta-routing.module';

import { DiarioNutricionalPreguntaPage } from './diario-nutricional-pregunta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioNutricionalPreguntaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DiarioNutricionalPreguntaPage]
})
export class DiarioNutricionalPreguntaPageModule {}
