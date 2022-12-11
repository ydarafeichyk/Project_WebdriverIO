const { BasePage } = require('./BasePage');

class ShoppingCartPage extends BasePage {
  constructor() {
    super();
    this.cartMessage = "(//div[@class='heading'])[1]";
    this.btnDel = "(//a[@class='delete'])[1]";
    this.emptyMessage = '//h3';
  }
  async deleteProduct() {
    await browser.pause(2000);
    await $(this.btnDel).waitForClickable();
    await $(this.btnDel).click();
    await browser.pause(2000);
  }
}

module.exports = { ShoppingCartPage };
