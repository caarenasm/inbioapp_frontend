import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';
import { MenuComponent } from './menu/menu.component';
import { BotonComponent } from './boton/boton.component';
import { InfoAyudaComponent } from './info-ayuda/info-ayuda.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabComponent,
    MenuComponent,
    BotonComponent,
    InfoAyudaComponent
  ],
  exports: [
    HeaderComponent,
    TabComponent,
    MenuComponent,
    BotonComponent,
    InfoAyudaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }