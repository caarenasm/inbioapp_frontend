import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioSenalesOrganismoPage } from './diario-senales-organismo.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioSenalesOrganismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioSenalesOrganismoPageRoutingModule {}
