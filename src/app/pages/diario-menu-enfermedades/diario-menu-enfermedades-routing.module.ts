import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioMenuEnfermedadesPage } from './diario-menu-enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioMenuEnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioMenuEnfermedadesPageRoutingModule {}
