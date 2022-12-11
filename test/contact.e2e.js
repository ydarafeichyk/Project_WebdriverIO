const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { VeloPage } = require('../pageobjects/pageComponents/VeloPage');
const { CallPage } = require('../pageobjects/pageComponents/CallPage');
const { ReviewPage } = require('../pageobjects/ReviewPage');

const mainPage = new MainPage();
const veloPage = new VeloPage();
const callPage = new CallPage();
const reviewPage = new ReviewPage();

describe('Testing communication module', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await browser.pause(2000);
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check the function order a call', async function () {
    await $(callPage.link_RequestCall).click();
    await callPage.requestCall('80171111111', 'test');
    expect(await $(callPage.callMessage).getText()).to.contain('Сообщение отправлено');
  });

  it('Check function feedback', async function () {
    await $(veloPage.btnVelo).click();
    await $(veloPage.mountainVelo).click();
    await $(veloPage.linkVelo).click();
    await $(veloPage.link_AddReview).click();
    await reviewPage.addReview('Fine', 'No', 'Well', 'Name');
    expect(await $(reviewPage.reviewMessage).getText()).to.contain('Отзыв добавлен');
  });

  it('Check the feedback function without filling in the required fields', async function () {
    await $(veloPage.btnVelo).click();
    await $(veloPage.mountainVelo).click();
    await $(veloPage.linkVelo).click();
    await $(veloPage.link_AddReview).click();
    await reviewPage.addReviewWithautField('Fine', 'No', 'Well', 'Name');
    expect(await $(reviewPage.errorMessage).getText()).to.contain('Заполните все поля!');
  });
});
