import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';
import { MenuComponent } from './menu/menu.component';
import { BotonComponent } from './boton/boton.component';
import { InfoAyudaComponent } from './info-ayuda/info-ayuda.component';
import { BotonAccionComponent } from './boton-accion/boton-accion.component';
import { BotonMenuComponent } from './boton-menu/boton-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabComponent,
    MenuComponent,
    BotonComponent,
    InfoAyudaComponent,
    BotonAccionComponent,
    BotonMenuComponent
  ],
  exports: [
    HeaderComponent,
    TabComponent,
    MenuComponent,
    BotonComponent,
    InfoAyudaComponent,
    BotonAccionComponent,
    BotonMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
