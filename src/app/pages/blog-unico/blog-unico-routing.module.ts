import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogUnicoPage } from './blog-unico.page';

const routes: Routes = [
  {
    path: '',
    component: BlogUnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogUnicoPageRoutingModule {}
