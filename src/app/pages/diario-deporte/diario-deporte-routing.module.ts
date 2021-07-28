import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioDeportePage } from './diario-deporte.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioDeportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioDeportePageRoutingModule {}
