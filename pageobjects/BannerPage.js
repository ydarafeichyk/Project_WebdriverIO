const { BasePage } = require('./BasePage');

class BannerPage extends BasePage {
  constructor() {
    super();
    this.contentPage = '//h1';
  }
}

module.exports = { BannerPage };
