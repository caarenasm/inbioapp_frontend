import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';
import { MenuComponent } from './menu/menu.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabComponent,
    MenuComponent,
    BotonComponent
  ],
  exports: [
    HeaderComponent,
    TabComponent,
    MenuComponent,
    BotonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
