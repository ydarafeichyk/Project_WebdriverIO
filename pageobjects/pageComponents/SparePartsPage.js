const { BasePage } = require('../BasePage');

class SparePartsPage extends BasePage {
  constructor() {
    super();
    this.btnSparePart = "(//a[@itemprop='url'])[3]";
    this.linkVeloCamera = "(//div[@class='catalog-section-list-item'])[1]";
    this.element = "(//div[@class='productColImage'])[1]";
    this.btnPlus = "(//a[@class='plus'])[2]";
    this.amount = "(//input[@class='qty'])[2]";
  }
}

module.exports = { SparePartsPage };
