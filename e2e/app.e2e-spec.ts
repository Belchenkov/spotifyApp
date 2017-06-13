import { Angular2websitePage } from './app.po';

describe('angular2website App', function() {
  let page: Angular2websitePage;

  beforeEach(() => {
    page = new Angular2websitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
