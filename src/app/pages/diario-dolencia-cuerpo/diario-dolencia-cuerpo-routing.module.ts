import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioDolenciaCuerpoPage } from './diario-dolencia-cuerpo.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioDolenciaCuerpoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioDolenciaCuerpoPageRoutingModule {}
