<<<<<<< HEAD
import { browser, element, by } from 'protractor';

export class LbdFreeAngularcliPage {
=======
import { browser, by, element } from 'protractor';

export class AppPage {
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
