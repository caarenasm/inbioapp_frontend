import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaPageRoutingModule } from './receta-routing.module';

import { RecetaPage } from './receta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecetaPage]
})
export class RecetaPageModule {}
