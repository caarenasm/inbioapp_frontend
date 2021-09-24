import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioPesoPage } from './diario-peso.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioPesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioPesoPageRoutingModule {}
