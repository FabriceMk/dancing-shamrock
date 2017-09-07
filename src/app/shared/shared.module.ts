import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe';

/**
 * Module for all useful shared tools, pipes, components that can be used across the whole application
 */
@NgModule({
  imports: [ CommonModule ],
  declarations: [
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    CapitalizePipe
  ]
})
export class SharedModule {}
