import { Angular2GlobalNewsPage } from './app.po';

describe('angular2-global-news App', function() {
  let page: Angular2GlobalNewsPage;

  beforeEach(() => {
    page = new Angular2GlobalNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
