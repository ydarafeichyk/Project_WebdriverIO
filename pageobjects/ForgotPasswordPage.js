const { BasePage } = require('./BasePage');

class ForgotPasswordPage extends BasePage {
  constructor() {
    super();
    this.passwordMessage = '//h1';
  }
}

module.exports = { ForgotPasswordPage };
