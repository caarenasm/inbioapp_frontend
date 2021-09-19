import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDetallePageRoutingModule } from './blog-detalle-routing.module';

import { BlogDetallePage } from './blog-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogDetallePageRoutingModule
  ],
  declarations: [BlogDetallePage]
})
export class BlogDetallePageModule {}
