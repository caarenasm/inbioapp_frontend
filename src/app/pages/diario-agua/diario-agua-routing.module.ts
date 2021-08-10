import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioAguaPage } from './diario-agua.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioAguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioAguaPageRoutingModule {}
