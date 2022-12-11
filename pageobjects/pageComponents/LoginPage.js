const { BasePage } = require('../BasePage');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.btnLogin = "//a[@href='/auth/?backurl=/']";
    this.input_login = "input[name='USER_LOGIN']";
    this.input_password = "input[name='USER_PASSWORD']";
    this.btnSubmit = '.btn-primary.submit';
    this.linkForgot = '.forgot';
  }
  async login(name, password) {
    await $(this.input_login).setValue(name);
    await $(this.input_password).setValue(password);
    await $(this.btnSubmit).click();
  }
}

module.exports = { LoginPage };
