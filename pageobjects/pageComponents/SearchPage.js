const { BasePage } = require('../BasePage');

class SearchPage extends BasePage {
  constructor() {
    super();
    this.input_SearchField = '#searchQuery';
    this.priceMin = '#arrFilter_P1_MIN';
    this.priceMax = '#arrFilter_P1_MAX';
    this.brandStels = "label[data-role='label_arrFilter_52_1463075569']";
    this.cityClass = "//label[@data-role='label_arrFilter_99_3994858278']";
    this.btn_Show = '#modef_send';
  }
  async searchByBrand(brand) {
    await $(this.input_SearchField).click();
    await $(this.input_SearchField).setValue(brand);
    await browser.keys('Enter');
  }

  async indicatePrice(min, max) {
    await $(this.priceMin).scrollIntoView();
    await $(this.priceMin).setValue(400);
    await browser.pause(2000);
    await $(this.priceMax).setValue(1000);
  }
  async indicateBrand() {
    await $(this.brandStels).scrollIntoView();
    await $(this.brandStels).waitForClickable();
    await $(this.brandStels).click();
    await browser.pause(2000);
  }

  async indicateClass() {
    await $(this.cityClass).scrollIntoView();
    await $(this.cityClass).waitForClickable();
    await $(this.cityClass).click();
    await browser.pause(2000);
  }

  async showSelected() {
    await $(this.btn_Show).waitForDisplayed({ timeout: '5000' });
    await $(this.btn_Show).click();
  }
}

module.exports = { SearchPage };
