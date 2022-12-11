const { BasePage } = require('../BasePage');

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
    await $(this.iconDel).waitForClickable();
    await $(this.iconDel).click();
    await browser.pause(1000);
  }
}

module.exports = { ComparisonPage };
