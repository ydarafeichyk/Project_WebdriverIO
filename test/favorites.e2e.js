const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { FavoritesPage } = require('../pageobjects/pageComponents/FavoritesPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const favoritesPage = new FavoritesPage();
const catalogPage = new CatalogPage();

describe('Favorites module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.teenageVelo);
    await I.click(catalogPage.linkCityVelo);
    await I.click(catalogPage.icon_AddWish);
    await I.click(favoritesPage.btn_Favorite);
    await browser.pause(2000);
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check adding product to favorites', async function () {
    expect(await $(catalogPage.linkCityVelo).isDisplayed()).to.equal(true);
  });

  it('Check the field send product by email', async function () {
    await favoritesPage.sendEmail();
    expect(await $(favoritesPage.btn_SendEmail).getText()).to.equal('Отправлено');
  });

  it('Check product removal from favorites', async function () {
    await favoritesPage.removeFromWish();
    expect(await $(favoritesPage.title_Wish).getText()).to.equal('В ИЗБРАННОМ ПОКА ПУСТО');
  });
});
