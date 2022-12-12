# Project_WebdriverIO_Autotest_Framework

The framework is designed for automated testing of the site in the browser.

## Features

- Test with [Chrome](https://microsoft.github.io/language-server-protocol/specification#textDocument_completion) 
- [WebdriverIO](https://microsoft.github.io/language-server-protocol/specification#textDocument_foldingRange) used for testing Web UI
- [Mocha](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_selectionRange) used for writting tests
- Page Object Pattern example

- [Axios](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) used for API tests

- [Eslint](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_symbol) used for code analyzer

- Detailed reports generation [Allure report, Mochawesome report](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink) 

## Requirements
+ Tests are executed with [Node.js](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_symbol), requires:
	+ Node.js version 14 or higher
## Getting Started
+ Install dependencies required to run the tests:
~~~
> npm install
~~~
+ Install [WebdriverIO](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink) 
~~~
> npm install webdriverio
> npm init wdio .
~~~
+ Install [Axios with Mocha](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink) 
~~~
> npm install mocha
> npm install chai
> npm install axios
~~~
+ Install [Eslint](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink) 
~~~
> npm install eslint
> npx eslint --init
~~~
+ Install [Prettier](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink) 
~~~
> npm install prettier
~~~
+ Install [Allure HTML report](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink)
~~~
> npm install allure-commandline
> npx allure generate allure-results --clean && allure open
~~~
+ Install [Mochawesome report](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink)
~~~
> npm install mochawesome
~~~
+ Running [UI tests](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink)
~~~
> npm run tests
~~~
+ Running [Api tests](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink)
~~~
npm run test
~~~
+ Open [HTML Allure report](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentLink)
~~~
> npm run generate-report
~~~
