const Page = require('./page');

class Home extends Page {

  get searchField() { return $('[name=q]') }
  get searchForm() { return $('#search'); }

  open() {
    super.open();
  }

  searchFor(phrase) {
    this.searchField.setValue(phrase);
    this.searchForm.submitForm();
  }

}

module.exports = new Home();
