import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const showDescriptions = 'show_descriptions';
/**
 * Service for interacting with the Global Configuration
 * of the application.
 */
@Injectable()
export class ConfigurationService {
  showDescriptions: BehaviorSubject<boolean>;

  /**
   * Toggles the Descriptions Display setting and stores it in Local Storage.
   */
  toggleDescriptions(): void {
    const actualState = JSON.parse(localStorage.getItem(showDescriptions));

    if (actualState === null) {
      localStorage.setItem(showDescriptions, JSON.stringify(false));
      this.showDescriptions.next(false);
    }

    localStorage.setItem(showDescriptions, JSON.stringify(!actualState));
    this.showDescriptions.next(!actualState);
  }

  /**
   * Gets the actual value of the Descriptions Display setting.
   */
  getDescriptionsDisplay(): Observable<boolean> {
    const actualValue = localStorage.getItem(showDescriptions);

    let newValue: boolean;

    if (actualValue == null) {
      localStorage.setItem(showDescriptions, JSON.stringify(true));
      newValue = true;
    } else {
      newValue = JSON.parse(actualValue);
    }

    if (this.showDescriptions == null) {
      this.showDescriptions = new BehaviorSubject<boolean>(newValue);
    } else {
      this.showDescriptions.next(newValue);
    }

    return this.showDescriptions.asObservable();
  }
}
