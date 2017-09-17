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
  MdTabsModule,
  MdChipsModule
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
    MdTabsModule,
    MdChipsModule,
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
    MdTabsModule,
    MdChipsModule
  ],
})
export class MaterialExporterModule { }
