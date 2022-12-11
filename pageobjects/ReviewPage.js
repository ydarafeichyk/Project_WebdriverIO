const { BasePage } = require('./BasePage');

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
    await $(this.experience).click();
    await $(this.input_advantage).setValue(advantage);
    await $(this.input_disadvantage).setValue(disadvantage);
    await $(this.input_comment).setValue(impession);
    await $(this.input_name).setValue(name);
    await $(this.btnSubmit).click();
  }

  async addReviewWithautField(advantage, disadvantage, impession, name) {
    await browser.pause(2000);
    await $(this.experience).click();
    await $(this.input_advantage).setValue(advantage);
    await $(this.input_disadvantage).setValue(disadvantage);
    await $(this.input_comment).setValue(impession);
    await $(this.input_name).setValue(name);
    await $(this.btnSubmit).click();
  }
}

module.exports = { ReviewPage };
