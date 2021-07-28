import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiDiarioNutricionalDetallesPage } from './mi-diario-nutricional-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: MiDiarioNutricionalDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiDiarioNutricionalDetallesPageRoutingModule {}
