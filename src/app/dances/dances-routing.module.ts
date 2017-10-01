import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetDancesListComponent } from './set-dances-list/set-dances-list.component';

import { SetDancesDetailsComponent } from './set-dances-details/set-dances-details.component';

const dancesRoutes: Routes = [
  { path: 'set-dances',  component: SetDancesListComponent },
  { path: 'set-dances/:id',  component: SetDancesDetailsComponent }
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
