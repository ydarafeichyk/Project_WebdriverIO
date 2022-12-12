const { BasePage } = require('./BasePage');

class SearchResultPage extends BasePage {
  constructor() {
    super();
    this.title_Search = '//h3';
  }
}

module.exports = { SearchResultPage };
