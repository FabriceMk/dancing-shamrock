import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialExporterModule } from './material-exporter.module';
import { AppRoutingModule } from './app-routing.module';

import { DancesModule } from './dances/dances.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    HttpModule,

    // Base modules
    CoreModule,
    SharedModule,
    MaterialExporterModule,

    // Features Modules
    DancesModule,

    // App Routing Module
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
