import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioNutricionalPreguntaPage } from './diario-nutricional-pregunta.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioNutricionalPreguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioNutricionalPreguntaPageRoutingModule {}
