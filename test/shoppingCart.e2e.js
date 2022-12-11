const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');
const { ShoppingCartPage } = require('../pageobjects/ShoppingCartPage');
const { SparePartsPage } = require('../pageobjects/pageComponents/SparePartsPage');

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
    await $(veloPage.btnVelo).click();
    await $(veloPage.mountainVelo).click();
    await veloPage.addQuickProduct();
    expect(await $(shoppingCartPage.cartMessage).getText()).to.contain('Товар добавлен в корзину');
  });

  it('Check product removal from shopping cart', async function () {
    await $(veloPage.btnVelo).click();
    await $(veloPage.cityVelo).click();
    await veloPage.addProduct();
    await shoppingCartPage.deleteProduct();
    expect(await $(shoppingCartPage.emptyMessage).getText()).to.contain('В КОРЗИНЕ ПОКА ПУСТО');
  });

  it('check the change in the quantity of the product in the cart', async function () {
    await $(sparePartsPage.btnSparePart).click();
    await $(sparePartsPage.linkVeloCamera).click();
    await browser.pause(2000);
    await $(sparePartsPage.element).click();
    await browser.pause(2000);
    await $(sparePartsPage.btnPlus).click();
    expect(await $(sparePartsPage.amount).getValue()).to.equal('2');
  });
});
