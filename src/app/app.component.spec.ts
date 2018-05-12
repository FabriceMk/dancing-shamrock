import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { MaterialExporterModule } from './material-exporter.module';
import { ConfigurationService } from './core/configuration/configuration.service';

const configurationServiceStub = {
  getDescriptionsDisplay: function() { return new Observable<boolean>(); }
};

describe('root: AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let configurationService: ConfigurationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialExporterModule, RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [ { provide: ConfigurationService, useValue: configurationServiceStub } ]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    configurationService = TestBed.get(ConfigurationService);

    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  // it('should render title in the toolbar', async(() => {
  //   const node = el.querySelector('#app-title');

  //   fixture.detectChanges();

  //   expect(node.textContent).toContain('Dancing Clover');
  // }));
});
