const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { SearchPage } = require('../pageobjects/pageComponents/SearchPage');
const { SearchResultPage } = require('../pageobjects/SearchResultPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const searchPage = new SearchPage();
const searchResultPage = new SearchResultPage();
const catalogPage = new CatalogPage();

describe('Search module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check search by brand', async function () {
    await searchPage.searchByBrand('Stels');
    expect(await $(searchResultPage.title_Search).getText()).to.contain('Товары по запросу: «Stels»');
  });

  it('Check search by filter', async function () {
    await I.click(catalogPage.btnVelo);
    await searchPage.indicatePrice(400, 1000);
    await searchPage.indicateBrand();
    await searchPage.indicateClass();
    await searchPage.showSelected();
    expect(await browser.getUrl()).to.equal('https://velosiped.by/catalog/velosipedy/filter/price-base-from-400-to-1000/att_brand-is-stels/class-is-gornyj/');
  });
});
