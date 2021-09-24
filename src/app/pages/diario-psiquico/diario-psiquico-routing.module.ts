import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioPsiquicoPage } from './diario-psiquico.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioPsiquicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioPsiquicoPageRoutingModule {}
