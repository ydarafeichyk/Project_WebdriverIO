class BaseElements {
  async click(element) {
    await $(element).waitForClickable();
    await $(element).click();
  }
  async setValue(element, text) {
    await $(element).waitForDisplayed();
    await $(element).setValue(text);
  }

  async scroll(element) {
    await $(element).scrollIntoView();
    await $(element).waitForClickable();
  }
}

module.exports = new BaseElements();
