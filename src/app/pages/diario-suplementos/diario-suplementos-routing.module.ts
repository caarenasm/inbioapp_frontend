import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioSuplementosPage } from './diario-suplementos.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioSuplementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioSuplementosPageRoutingModule {}
