import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogGeneralPageRoutingModule } from './blog-general-routing.module';

import { BlogGeneralPage } from './blog-general.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogGeneralPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogGeneralPage]
})
export class BlogGeneralPageModule {}
