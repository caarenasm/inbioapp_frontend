import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioVisionPage } from './diario-vision.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioVisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioVisionPageRoutingModule {}
