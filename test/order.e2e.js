const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { OrderPage } = require('../pageobjects/OrderPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const catalogPage = new CatalogPage();
const orderPage = new OrderPage();

describe('Ordering product', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
  });

  it('Check the one-click order function is available', async function () {
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.teenageVelo);
    await I.click(catalogPage.linkCityVelo);
    await I.click(catalogPage.btn_OneClick);
    await orderPage.buyInOneClick('test', '80171111111', 'It is test');
    expect(await $(orderPage.resultTitle).getText()).to.contain('Ваш заказ успешно отправлен');
  });

  it('Check the order function is available', async function () {
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.mountainVelo);
    await catalogPage.addQuickProduct();
    await I.click(catalogPage.btnGoToCart);
    await catalogPage.ordering();
    await orderPage.buyProduct('FirstName', 'test@mail.ru', '80171111111', 'Address', 'It is test');
    expect(await $(orderPage.orderNumber).getText()).to.contain('Ваш заказ');
  });
});
