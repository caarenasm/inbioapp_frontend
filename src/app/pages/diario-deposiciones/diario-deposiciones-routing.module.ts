import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioDeposicionesPage } from './diario-deposiciones.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioDeposicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioDeposicionesPageRoutingModule {}
