const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.btnKnow = "//a[@class='cButton']";
  }
}

module.exports = { MainPage };
