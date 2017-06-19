import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DancesListComponent } from './dances-list/dances-list.component';

import { DancesService } from './shared/dances.service';

/**
 * Module for all useful shared tools, pipes, components that can be used across the whole application
 */
@NgModule({
  declarations: [ DancesListComponent ],
  imports: [ CommonModule ],
  exports: [],
  providers: [ DancesService ]
})
export class SharedModule {}
