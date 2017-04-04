import { browser, element, by } from 'protractor';

export class DancingCloverPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }
}
