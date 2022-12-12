const { BasePage } = require('../BasePage');
const I = require('../../helpers/BaseElements');

class CallPage extends BasePage {
  constructor() {
    super();
    this.link_RequestCall = '.openWebFormModal';
    this.input_Phone = "(//input[@class='inputtext'])[1]";
    this.input_Name = "(//input[@class='inputtext'])[2]";
    this.btnSendWebForm = "(//input[@class='sendWebFormDw'])[1]";
    this.callMessage = '.webFormMessageHeading';
  }

  async requestCall(phone, name) {
    await I.setValue(this.input_Phone, phone);
    await I.setValue(this.input_Name, name);
    await browser.pause(2000);

    await browser.execute(function () {
      return document.querySelector('label.label-for').click();
    });
    await browser.pause(5000);
    await I.click(this.btnSendWebForm);
    await browser.pause(1000);
  }
}

module.exports = { CallPage };
