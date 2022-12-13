exports.config = {
  runner: 'local',

  specs: ['./test/**/*.js'],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--whitelisted-ips=',
          '--disable-infobars=true',
          '--disable-gpu',
          'window-size=1920,1080',
          'test-type=browser',
          'disable-notifications',
          'incognito',
          'disable-application-cache',
          '-disable-extensions',
          '--ignore-certificate-errors',
          'enable-automation',
          '--disable-dev-shm-usage',
          '--disable-browser-side-navigation',
          '--no-sandbox',
        ],
      },
    },
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  async afterTest(test, context, {
    error, result, duration, passed, retries,
  }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },

};
