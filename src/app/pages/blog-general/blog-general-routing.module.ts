import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogGeneralPage } from './blog-general.page';

const routes: Routes = [
  {
    path: '',
    component: BlogGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogGeneralPageRoutingModule {}
