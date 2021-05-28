import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisDatosDetallePage } from './mis-datos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MisDatosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisDatosDetallePageRoutingModule {}
