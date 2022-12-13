const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

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
    await I.setValue(this.input_login, name);
    await I.setValue(this.input_password, password);
    await I.click(this.btnSubmit);
  }
}

module.exports = { LoginPage };
