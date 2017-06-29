import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExporterModule } from './../material-exporter.module';
import { DancesRoutingModule } from './dances-routing.module';

import { DancesListComponent } from './dances-list/dances-list.component';

import { DancesService } from './shared/dances.service';

/**
 * Module for everything related to dances
 */
@NgModule({
  declarations: [ DancesListComponent ],
  imports: [
    CommonModule,
    MaterialExporterModule ,
    DancesRoutingModule
  ],
  exports: [ DancesListComponent ],
  providers: [ DancesService ]
})
export class DancesModule {}
