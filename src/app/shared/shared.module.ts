import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from './pipes/capitalize.pipe';

/**
 * Module for all useful shared tools, pipes, components that can be used across the whole application
 */
@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    CapitalizePipe
  ]
})
export class SharedModule {}
