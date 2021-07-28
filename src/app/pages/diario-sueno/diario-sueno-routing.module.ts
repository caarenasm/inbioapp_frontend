import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioSuenoPage } from './diario-sueno.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioSuenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioSuenoPageRoutingModule {}
