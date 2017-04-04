import { DancingCloverPage } from './app.po';

describe('dancing-clover App', function() {
  let page: DancingCloverPage;

  beforeEach(() => {
    page = new DancingCloverPage();
  });

  it('should display the correct app title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Dancing Clover');
  });
});
