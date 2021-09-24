import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioIncomodidadAlimentoPage } from './diario-incomodidad-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioIncomodidadAlimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioIncomodidadAlimentoPageRoutingModule {}
