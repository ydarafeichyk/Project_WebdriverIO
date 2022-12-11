const { BasePage } = require('../BasePage');

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
    await $(this.input_Email).scrollIntoView();
    await $(this.input_Email).waitForClickable();
    await $(this.input_Email).setValue('test2022project@mail.ru');
    await $(this.btn_SendEmail).waitForClickable();
    await $(this.btn_SendEmail).click();
    await browser.pause(2000);
  }
  async removeFromWish() {
    await $(this.icon_Del).waitForClickable();
    await $(this.icon_Del).click();
    await browser.pause(1000);
  }
}

module.exports = { FavoritesPage };
