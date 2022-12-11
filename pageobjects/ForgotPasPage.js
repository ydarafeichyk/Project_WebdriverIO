const { BasePage } = require('./BasePage');

class ForgotPasPage extends BasePage {
  constructor() {
    super();
    this.pasMessage = '//h1';
  }
}

module.exports = { ForgotPasPage };
