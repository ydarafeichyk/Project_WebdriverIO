const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class FavoritesPage extends BasePage {
  constructor() {
    super();
    this.btn_Favorite = "(//span[@class='icon'])[2]";
    this.input_Email = '#wishlist-form-email';
    this.btn_SendEmail = 'a#wishlist-form-send';
    this.icon_Del = "(//a[@class='removeFromWishlist'])[1]";
    this.title_Wish = '//h3';
  }
  async sendEmail() {
    await I.scroll(this.input_Email);
    await I.setValue(this.input_Email, 'test2022project@mail.ru');
    await I.click(this.btn_SendEmail);
    await browser.pause(2000);
  }
  async removeFromWish() {
    await I.click(this.icon_Del);
    await browser.pause(1000);
  }
}

module.exports = { FavoritesPage };
