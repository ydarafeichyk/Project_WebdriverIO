const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { FavoritesPage } = require('../pageobjects/pageComponents/FavoritesPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');

const mainPage = new MainPage();
const favoritesPage = new FavoritesPage();
const veloPage = new VeloPage();

describe('Favorites module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
    await $(veloPage.btnVelo).click();
    await $(veloPage.teenageVelo).click();
    await $(veloPage.linkCityVelo).click();
    await $(veloPage.icon_AddWish).click();
    await $(favoritesPage.btn_Favorite).click();
    await browser.pause(2000);
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check adding product to favorites', async function () {
    expect(await $(veloPage.linkCityVelo).isDisplayed()).to.equal(true);
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
