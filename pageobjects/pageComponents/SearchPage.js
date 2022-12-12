const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

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
    await I.click(this.input_SearchField);
    await I.setValue(this.input_SearchField, brand);
    await browser.keys('Enter');
  }

  async indicatePrice(min, max) {
    await I.scroll(this.priceMin);
    await I.setValue(this.priceMin, 400);
    await browser.pause(2000);
    await I.setValue(this.priceMax, 1000);
  }
  async indicateBrand() {
    await I.scroll(this.brandStels);
    await I.click(this.brandStels);
    await browser.pause(2000);
  }

  async indicateClass() {
    await I.scroll(this.cityClass);
    await I.click(this.cityClass);
    await browser.pause(2000);
  }

  async showSelected() {
    await $(this.btn_Show).waitForDisplayed({ timeout: '5000' });
    await I.click(this.btn_Show);
  }
}

module.exports = { SearchPage };
