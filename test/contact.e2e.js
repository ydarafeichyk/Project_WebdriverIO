const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const { CallPage } = require('../pageobjects/pageComponents/CallPage');
const { ReviewPage } = require('../pageobjects/ReviewPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const catalogPage = new CatalogPage();
const callPage = new CallPage();
const reviewPage = new ReviewPage();

describe('Testing communication module', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(1000);
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check the function order a call', async function () {
    await I.click(callPage.link_RequestCall);
    await callPage.requestCall('80171111111', 'test');
    expect(await $(callPage.callMessage).getText()).to.contain('Сообщение отправлено');
  });

  it('Check function feedback', async function () {
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.mountainVelo);
    await I.click(catalogPage.linkVelo);
    await I.click(catalogPage.link_AddReview);
    await reviewPage.addReview('Fine', 'No', 'Well', 'Name');
    expect(await $(reviewPage.reviewMessage).getText()).to.contain('Отзыв добавлен');
  });

  it('Check the feedback function without filling in the required fields', async function () {
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.mountainVelo);
    await I.click(catalogPage.linkVelo);
    await I.click(catalogPage.link_AddReview);
    await reviewPage.addReviewWithautField('Fine', 'No', 'Well', 'Name');
    expect(await $(reviewPage.errorMessage).getText()).to.contain('Заполните все поля!');
  });
});
