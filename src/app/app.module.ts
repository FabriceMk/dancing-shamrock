import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import 'hammerjs';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialExporterModule } from './material-exporter.module';
import { AppRoutingModule } from './app-routing.module';

import { DancesModule } from './dances/dances.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    // AngularMaterial
    BrowserAnimationsModule,

    // Base modules
    CoreModule,
    SharedModule,
    MaterialExporterModule,

    // Features Modules
    DancesModule,

    // App Routing Module
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
