const { BasePage } = require('./BasePage');
const I = require('../helpers/BaseElements');

class ReviewPage extends BasePage {
  constructor() {
    super();
    this.experience = "//a[@data-id='5']";
    this.input_advantage = "textarea[name='DIGNITY']";
    this.input_disadvantage = "textarea[name='SHORTCOMINGS']";
    this.input_comment = "textarea[name='COMMENT']";
    this.input_name = "input[name='NAME']";
    this.btnSubmit = "//a[@class='submit']";
    this.reviewMessage = "//span[text()='Отзыв добавлен']";
    this.errorMessage = "//p[text()='Заполните все поля!']";
  }
  async addReview(advantage, disadvantage, impession, name) {
    await browser.pause(2000);
    await browser.execute(function () {
      return document.querySelector("span[class='rating']").click();
    });
    await browser.pause(2000);
    await I.click(this.experience);
    await I.setValue(this.input_advantage, advantage);
    await I.setValue(this.input_disadvantage, disadvantage);
    await I.setValue(this.input_comment, impession);
    await I.setValue(this.input_name, name);
    await I.click(this.btnSubmit);
  }

  async addReviewWithautField(advantage, disadvantage, impession, name) {
    await browser.pause(2000);
    await I.click(this.experience);
    await I.setValue(this.input_advantage, advantage);
    await I.setValue(this.input_disadvantage, disadvantage);
    await I.setValue(this.input_comment, impession);
    await I.setValue(this.input_name, name);
    await I.click(this.btnSubmit);
  }
}

module.exports = { ReviewPage };
