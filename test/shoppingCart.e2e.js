const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');
const { ShoppingCartPage } = require('../pageobjects/ShoppingCartPage');
const { SparePartsPage } = require('../pageobjects/pageComponents/SparePartsPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const veloPage = new VeloPage();
const shoppingCartPage = new ShoppingCartPage();
const sparePartsPage = new SparePartsPage();

describe('Shopping cart module testing', function () {
  beforeEach(async function () {
    mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check adding product to shopping cart', async function () {
    await I.click(veloPage.btnVelo);
    await I.click(veloPage.mountainVelo);
    await veloPage.addQuickProduct();
    expect(await $(shoppingCartPage.cartMessage).getText()).to.contain('Товар добавлен в корзину');
  });

  it('Check product removal from shopping cart', async function () {
    await I.click(veloPage.btnVelo);
    await I.click(veloPage.cityVelo);
    await veloPage.addProduct();
    await shoppingCartPage.deleteProduct();
    expect(await $(shoppingCartPage.emptyMessage).getText()).to.contain('В КОРЗИНЕ ПОКА ПУСТО');
  });

  it('check the change in the quantity of the product in the cart', async function () {
    await I.click(sparePartsPage.btnSparePart);
    await I.click(sparePartsPage.linkVeloCamera);
    await browser.pause(2000);
    await I.click(sparePartsPage.element);
    await browser.pause(2000);
    await I.click(sparePartsPage.btnPlus);
    expect(await $(sparePartsPage.amount).getValue()).to.equal('2');
  });
});
