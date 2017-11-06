import { PostDemo2Page } from './app.po';

describe('post-demo2 App', () => {
  let page: PostDemo2Page;

  beforeEach(() => {
    page = new PostDemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
