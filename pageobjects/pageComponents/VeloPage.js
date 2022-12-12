const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class VeloPage extends BasePage {
  constructor() {
    super();
    this.btnVelo = "//a[@itemprop='url']";
    this.mountainVelo = "//div[@class='catalog-section-list-item']";
    this.cityVelo = "(//div[@class='catalog-section-list-item'])[2]";
    this.teenageVelo = "(//div[@class='catalog-section-list-item'])[4]";
    this.linkQuickView = "//span[@class='getFastView']";
    this.btnInCart = "(//div[@class='appFastViewInformationColumn']//a)[2]";
    this.btnCart = "(//a[contains(@class,'addCart changeID')])[2]";
    this.btnGoToCart = "(//span[@class='text'])[2]";
    this.linkCityVelo = "(//span[@class='middle'])[1]";
    this.icon_AddWish = "//a[@class='elem addWishlist']";
    this.icon_addCompare = "//a[contains(@class,'elem addCompare')]";
    this.linkVelo = "(//span[@class='middle'])[3]";
    this.link_AddReview = '.labelDotted';
    this.btn_OneClick = "(//a[contains(@class, 'fastBack label changeID')])[2]";
    this.btn_Order = "(//a[@class='selected'])[2]";
  }
  async addQuickProduct() {
    await browser.pause(2000);
    await $(this.linkQuickView).waitForDisplayed();
    await I.click(this.linkQuickView);
    await browser.pause(2000);
    await I.click(this.btnInCart);
    await browser.pause(2000);
  }
  async addProduct() {
    await $(this.linkCityVelo).waitForDisplayed();
    await I.click(this.linkCityVelo);
    await browser.pause(2000);
    await I.click(this.btnCart);
    await $(this.btnGoToCart).waitForClickable();
    await I.click(this.btnGoToCart);
  }
  async ordering() {
    await I.scroll(this.btn_Order);
    await I.click(this.btn_Order);
    await browser.pause(2000);
  }
}

module.exports = { VeloPage };
