import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioEnfermedadDetallePage } from './diario-enfermedad-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioEnfermedadDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioEnfermedadDetallePageRoutingModule {}
