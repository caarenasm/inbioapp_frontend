import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioMedicamentoPage } from './diario-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioMedicamentoPageRoutingModule {}
