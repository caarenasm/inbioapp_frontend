import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioAlergiasPage } from './diario-alergias.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioAlergiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioAlergiasPageRoutingModule {}
