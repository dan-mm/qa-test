const Page = require('./page');

class SearchResults extends Page {

  get noResultText() { return 'there doesn\'t seem to be anything here' };
  get listOfResults() { return $$('.search-result-header'); }
  get searchResultGroups() { return $$('.search-result-group'); }

  open() {
    super.open();
  }

}

module.exports = new SearchResults();
