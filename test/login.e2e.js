const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { LoginPage } = require('../pageobjects/pageComponents/LoginPage');
const { AuthorizationPage } = require('../pageobjects/AuthorizationPage');
const { ForgotPasswordPage } = require('../pageobjects/ForgotPasswordPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const loginPage = new LoginPage();
const authorizationPage = new AuthorizationPage();
const forgotPasswordPage = new ForgotPasswordPage();

describe('Authorization module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
  });

  it('Check login in with invalid credentials', async function () {
    await I.click(loginPage.btnLogin);
    await loginPage.login('login', '1111111');
    expect(await $(authorizationPage.authorizationMessage).getText()).to.contain('НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ.');
  });

  it('Check password recovery', async function () {
    await I.click(loginPage.btnLogin);
    await I.setValue(loginPage.input_login, 'login');
    await I.click(loginPage.linkForgot);
    expect(await $(forgotPasswordPage.passwordMessage).getText()).to.contain('Забыли пароль?');
  });
});
