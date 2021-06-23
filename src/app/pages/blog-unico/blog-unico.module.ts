import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogUnicoPageRoutingModule } from './blog-unico-routing.module';

import { BlogUnicoPage } from './blog-unico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogUnicoPageRoutingModule
  ],
  declarations: [BlogUnicoPage]
})
export class BlogUnicoPageModule {}
