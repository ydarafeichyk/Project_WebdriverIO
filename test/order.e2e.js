const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { OrderPage } = require('../pageobjects/OrderPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const veloPage = new VeloPage();
const orderPage = new OrderPage();

describe('Ordering product', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
  });

  it('Check the one-click order function is available', async function () {
    await I.click(veloPage.btnVelo);
    await I.click(veloPage.teenageVelo);
    await I.click(veloPage.linkCityVelo);
    await I.click(veloPage.btn_OneClick);
    await orderPage.buyInOneClick('test', '80171111111', 'It is test');
    expect(await $(orderPage.resultTitle).getText()).to.contain('Ваш заказ успешно отправлен');
  });

  it('Check the order function is available', async function () {
    await I.click(veloPage.btnVelo);
    await I.click(veloPage.mountainVelo);
    await veloPage.addQuickProduct();
    await I.click(veloPage.btnGoToCart);
    await veloPage.ordering();
    await orderPage.buyProduct('FirstName', 'test@mail.ru', '80171111111', 'Address', 'It is test');
    expect(await $(orderPage.orderNumber).getText()).to.contain('Ваш заказ');
  });
});
