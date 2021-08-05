import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioDeposicionesDetallesPage } from './diario-deposiciones-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioDeposicionesDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioDeposicionesDetallesPageRoutingModule {}
