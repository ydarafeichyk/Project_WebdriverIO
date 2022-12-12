const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class ComparisonPage extends BasePage {
  constructor() {
    super();
    this.btn_Comparison = "(//span[@class='icon'])[1]";
    this.element_location = '.imgBlock';
    this.iconDel = "ins[data-id='3441']";
    this.title_Compare = '//h3';
  }

  async removeFromComparison() {
    await $(this.element_location).scrollIntoView();
    await I.click(this.iconDel);
    await browser.pause(1000);
  }
}

module.exports = { ComparisonPage };
