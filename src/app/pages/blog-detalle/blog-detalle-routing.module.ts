import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetallePage } from './blog-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: BlogDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogDetallePageRoutingModule {}
