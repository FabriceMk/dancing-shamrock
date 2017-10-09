import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule
  ],
})
export class MaterialExporterModule { }
