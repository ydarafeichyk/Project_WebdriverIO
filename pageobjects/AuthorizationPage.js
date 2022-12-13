const { BasePage } = require('./BasePage');

class AuthorizationPage extends BasePage {
  constructor() {
    super();
    this.authorizationMessage = '.alert-danger';
  }
}

module.exports = { AuthorizationPage };
