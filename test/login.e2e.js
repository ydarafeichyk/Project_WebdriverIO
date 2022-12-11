const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { LoginPage } = require('../pageobjects/pageComponents/LoginPage');
const { AuthPage } = require('../pageobjects/AuthPage');
const { ForgotPasPage } = require('../pageobjects/ForgotPasPage');

const mainPage = new MainPage();
const loginPage = new LoginPage();
const authPage = new AuthPage();
const forgotPasPage = new ForgotPasPage();

describe('Authorization module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
  });

  it('Check login in with invalid credentials', async function () {
    await $(loginPage.btnLogin).click();
    await loginPage.login('login', '1111111');
    expect(await $(authPage.authMessage).getText()).to.contain('НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ.');
  });

  it('Check password recovery', async function () {
    await $(loginPage.btnLogin).click();
    await $(loginPage.input_login).setValue('login');
    await $(loginPage.linkForgot).click();
    expect(await $(forgotPasPage.pasMessage).getText()).to.contain('Забыли пароль?');
  });
});
