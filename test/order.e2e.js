const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { OrderPage } = require('../pageobjects/OrderPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');

const mainPage = new MainPage();
const veloPage = new VeloPage();
const orderPage = new OrderPage();

describe('Ordering product', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
  });

  it('Check the one-click order function is available', async function () {
    await $(veloPage.btnVelo).click();
    await $(veloPage.teenageVelo).click();
    await $(veloPage.linkCityVelo).click();
    await $(veloPage.btn_OneClick).click();
    await orderPage.buyInOneClick('test', '80171111111', 'It is test');
    expect(await $(orderPage.resultTitle).getText()).to.contain('Ваш заказ успешно отправлен');
  });

  it('Check the order function is available', async function () {
    await $(veloPage.btnVelo).click();
    await $(veloPage.mountainVelo).click();
    await veloPage.addQuickProduct();
    await $(veloPage.btnGoToCart).click();
    await veloPage.ordering();
    await orderPage.buyProduct('FirstName', 'test@mail.ru', '80171111111', 'Address', 'It is test');
    expect(await $(orderPage.orderNumber).getText()).to.contain('Ваш заказ');
  });
});
