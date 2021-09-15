import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEstadisticasPage } from './mis-estadisticas.page';

const routes: Routes = [
  {
    path: '',
    component: MisEstadisticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEstadisticasPageRoutingModule {}
