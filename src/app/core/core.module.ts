import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Core Module hosts application wide singleton services, components and single use classes.
 * Should only be imported by the main AppModule.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class CoreModule {}
