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
  MdChipsModule,
  MdCheckboxModule
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
    MdCheckboxModule
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
    MdChipsModule,
    MdCheckboxModule
  ],
})
export class MaterialExporterModule { }
