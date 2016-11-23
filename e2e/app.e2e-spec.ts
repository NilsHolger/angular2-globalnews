import { Ng2globalnewsPage } from './app.po';

describe('ng2globalnews App', function() {
  let page: Ng2globalnewsPage;

  beforeEach(() => {
    page = new Ng2globalnewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
