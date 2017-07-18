import { TilesAppPage } from './app.po';

describe('tiles-app App', () => {
  let page: TilesAppPage;

  beforeEach(() => {
    page = new TilesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
