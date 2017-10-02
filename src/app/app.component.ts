import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfigurationService } from './core/configuration/configuration.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dancing Clover';

  showDescriptions: boolean;

  constructor(
    private titleService: Title,
    private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.configurationService.getDescriptionsDisplay()
      .subscribe(
        (show: boolean) => {
          this.showDescriptions = show;
        }
      );
  }

  /** Toggles the Descriptions Displays setting. */
  toggleDescriptionsDisplaySetting(): void {
    this.configurationService.toggleDescriptions();
  }
}
