import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialExporterModule } from './../material-exporter.module';

import { DancesRoutingModule } from './dances-routing.module';

import { SetDancesListComponent } from './set-dances-list/set-dances-list.component';
import { SetDancesDetailsComponent } from './set-dances-details/set-dances-details.component';

import { DancesService } from './shared/dances.service';

/**
 * Module for everything related to dances
 */
@NgModule({
  imports: [
    SharedModule,
    MaterialExporterModule ,
    DancesRoutingModule
  ],
  declarations: [
    SetDancesListComponent,
    SetDancesDetailsComponent
  ],
  exports: [],
  providers: [ DancesService ]
})
export class DancesModule {}
