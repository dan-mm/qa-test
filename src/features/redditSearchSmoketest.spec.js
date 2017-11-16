const Home = require('../page_objects/homepage.page');
const ResultsPage = require('../page_objects/searchResult.page');

describe('On the reddit homepage...   ', function () {
  beforeEach('On the reddit homepage...', function () {
    Home.open();
  });

  it('Returns search results for the term: "Foobar"   ', function () {
    const searchTerm = 'Foobar';
    Home.searchFor(searchTerm);
    ResultsPage.listOfResults.forEach( x => {
      expect(x.getText().toLowerCase().includes(searchTerm.toLowerCase())).toBeTruthy();
    });

  });


  it('Successfully finds no results for garbage search   ', function () {
    const searchTerm = '1232131\\\\12\\3\\12\\31\\23\\21312\\312\\31\\2[12]3[123]1[2]1[3';
    Home.searchFor(searchTerm);
    expect(ResultsPage.listOfResults.length).toBe(0);
    ResultsPage.searchResultGroups.forEach( x => {
      expect(x.getText().toLowerCase().includes(ResultsPage.noResultText)).toBeTruthy();
    });
  });

  it('White space is trimmed in search results   ', function () {
    var searchTerm = 'Foobar';
    const termWithWhiteSpace = '   ' + searchTerm + '   ';
    Home.searchFor(termWithWhiteSpace);
    ResultsPage.listOfResults.forEach( x => {
      expect(x.getText().toLowerCase().includes(searchTerm.toLowerCase())).toBeTruthy();
    });
  });

});
