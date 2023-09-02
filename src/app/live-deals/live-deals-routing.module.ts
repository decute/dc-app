import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveDealsPage } from './live-deals.page';

const routes: Routes = [
  {
    path: '',
    component: LiveDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveDealsPageRoutingModule {}
