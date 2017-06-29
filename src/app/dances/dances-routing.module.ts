import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DancesListComponent } from './dances-list/dances-list.component';

const dancesRoutes: Routes = [
  { path: 'dances',  component: DancesListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dancesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DancesRoutingModule { }
