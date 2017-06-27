import { NgModule } from '@angular/core';
import {
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdIconModule
 } from '@angular/material';

@NgModule({
  imports: [
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
})
export class MaterialExporterModule { }
