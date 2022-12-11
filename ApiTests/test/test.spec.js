const axios = require('axios');
const { expect } = require('chai');

describe('Api testing registration module', function () {
  it('Check status code when registering', async function () {
    const response = await axios.get('https://velosiped.by/auth/?register=yes&backurl=%2Fcatalog%2Fvelosipedy%2Fgornye%2F');
    expect(response.status).to.equal(200);
  });

  it('Api testing the quick buy module', async function () {
    const response = await axios.get('https://velosiped.by/ajax.php?id=3480&act=getFastBuy');
    expect(response.status).to.equal(200);
  });

  it('Api testing adding a product to the cart', async function () {
    const response = await axios.get('https://velosiped.by/ajax.php?act=addCart&id=3039&site_id=s1');
    expect(response.status).to.equal(200);
  });
});
