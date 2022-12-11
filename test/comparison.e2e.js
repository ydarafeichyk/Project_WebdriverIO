const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { ComparisonPage } = require('../pageobjects/pageComponents/ComparisonPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');

const mainPage = new MainPage();
const comparisonPage = new ComparisonPage();
const veloPage = new VeloPage();

describe('Testing the comparison module', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
    await $(veloPage.btnVelo).click();
    await $(veloPage.teenageVelo).click();
    await $(veloPage.linkCityVelo).click();
    await $(veloPage.icon_addCompare).click();
    await $(comparisonPage.btn_Comparison).click();
    await browser.pause(2000);
  });

  it('Check adding product to comparison', async function () {
    expect(await $(veloPage.linkCityVelo).isDisplayed()).to.equal(true);
  });

  it('Check product removal from comparison', async function () {
    await comparisonPage.removeFromComparison();
    expect(await $(comparisonPage.title_Compare).getText()).to.equal('В СПИСКЕ СРАВНЕНИЯ ПОКА ПУСТО');
  });
});
