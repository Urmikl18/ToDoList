import { ToDoListAppPage } from './app.po';

describe('to-do-list-app App', function() {
  let page: ToDoListAppPage;

  beforeEach(() => {
    page = new ToDoListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
