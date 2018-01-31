<<<<<<< HEAD
import { LbdFreeAngularcliPage } from './app.po';

describe('lbd-free-angularcli App', function() {
  let page: LbdFreeAngularcliPage;

  beforeEach(() => {
    page = new LbdFreeAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
=======
import { AppPage } from './app.po';

describe('ng-boilerplate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
  });
});
