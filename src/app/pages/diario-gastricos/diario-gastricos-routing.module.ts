import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioGastricosPage } from './diario-gastricos.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioGastricosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioGastricosPageRoutingModule {}
