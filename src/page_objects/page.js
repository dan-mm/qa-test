class Page {

  get title() { return browser.getTitle(); }

  open(path) {
    if (path) {
      browser.url('/' + path);
    } else {
      browser.url('/');
    }
  }

}

module.exports = Page;
