class BasePage {
  async navigate(path) {
    return browser.url(path);
  }
}

module.exports = { BasePage };
