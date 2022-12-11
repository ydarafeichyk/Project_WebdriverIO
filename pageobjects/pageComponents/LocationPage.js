const { BasePage } = require('../BasePage');

class LocationPage extends BasePage {
  constructor() {
    super();
    this.link_location = '.user-geo-position-value-link';
    this.link_city = "//span[text()='Брест']";
    this.btn_geoLocation = 'a.geo-location-window-button';
    this.input_Location = 'input.geo-location-window-search-input';
    this.list_Location = 'a.geo-location-list-item-link';
  }

  async chooseLocation() {
    await $(this.link_city).waitForDisplayed({ timeout: 2000 });
    await $(this.link_city).click();
    await $(this.btn_geoLocation).waitForDisplayed({ timeout: 2000 });
    await $(this.btn_geoLocation).click();
    await browser.pause(2000);
  }

  async chooseLocationByField() {
    await $(this.input_Location).setValue('Лида');
    await $(this.list_Location).click();
    await browser.pause(2000);
    await $(this.btn_geoLocation).click();
    await browser.pause(2000);
  }
}

module.exports = { LocationPage };
