import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialExporterModule } from './material-exporter.module';

describe('root: AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialExporterModule, RouterTestingModule ],
      declarations: [ AppComponent ],
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should render title in the toolbar`, async(() => {
    const node = el.querySelector('#app-title');

    fixture.detectChanges();

    expect(node.textContent).toContain('Dancing Clover');
  }));
});
