import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiDiarioNutricionalPage } from './mi-diario-nutricional.page';

const routes: Routes = [
  {
    path: '',
    component: MiDiarioNutricionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiDiarioNutricionalPageRoutingModule {}
