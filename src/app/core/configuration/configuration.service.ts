import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export const showDescriptions = 'show_descriptions';
/**
 * Service for interacting with the Global Configuration
 * of the application.
 */
@Injectable()
export class ConfigurationService {
  /**
   * Toggles the Descriptions Display setting, stores it in Local Storage
   * and returns the new value.
   */
  toggleDescriptions(): boolean {
    const actualState = JSON.parse(localStorage.getItem(showDescriptions));

    if (actualState === null) {
      localStorage.setItem(showDescriptions, JSON.stringify(false));
      return false;
    }

    localStorage.setItem(showDescriptions, JSON.stringify(!actualState));
    return !actualState;
  }

  /**
   * Gets the actual value of the Descriptions Display setting.
   */
  getDescriptionsDisplay(): boolean {
    const actualValue = localStorage.getItem(showDescriptions);

    if (!actualValue) {
      localStorage.setItem(showDescriptions, JSON.stringify(true));
      return true;
    }
    return JSON.parse(actualValue);
  }
}
