import { DancingCloverPage } from './app.po';

describe('dancing-clover App', function() {
  let page: DancingCloverPage;

  beforeEach(() => {
    page = new DancingCloverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
