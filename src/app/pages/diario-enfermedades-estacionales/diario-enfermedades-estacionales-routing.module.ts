import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioEnfermedadesEstacionalesPage } from './diario-enfermedades-estacionales.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioEnfermedadesEstacionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioEnfermedadesEstacionalesPageRoutingModule {}
