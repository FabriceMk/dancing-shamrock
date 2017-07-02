import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetDancesListComponent } from './set-dances-list/set-dances-list.component';

const dancesRoutes: Routes = [
  { path: 'dances',  component: SetDancesListComponent }
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
