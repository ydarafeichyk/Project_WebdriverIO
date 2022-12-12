const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

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
    await I.click(this.link_city);
    await $(this.btn_geoLocation).waitForDisplayed({ timeout: 2000 });
    await I.click(this.btn_geoLocation);
    await browser.pause(2000);
  }

  async chooseLocationByField() {
    await I.setValue(this.input_Location, 'Лида');
    await I.click(this.list_Location);
    await browser.pause(2000);
    await I.click(this.btn_geoLocation);
    await browser.pause(2000);
  }
}

module.exports = { LocationPage };
