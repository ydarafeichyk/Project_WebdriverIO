const { BasePage } = require('./BasePage');

class AuthPage extends BasePage {
  constructor() {
    super();
    this.authMessage = '.alert-danger';
  }
}

module.exports = { AuthPage };
