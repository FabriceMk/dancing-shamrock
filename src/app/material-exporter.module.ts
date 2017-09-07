import { NgModule } from '@angular/core';
import {
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdTabsModule
 } from '@angular/material';

@NgModule({
  imports: [
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdTabsModule
  ],
  exports: [
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdTabsModule
  ],
})
export class MaterialExporterModule { }
