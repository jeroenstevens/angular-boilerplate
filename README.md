### Angular boilerplate

Starting state includes:

Bower
* angular
* angular-mocks
* angular-routes

Node modules
* karma
* karma-jasmine
* karma-coverage
* karma-phantomjs-launcher
* karma-clear-screen-reporter

#### Usage

```
$ git clone git@github.com:jeroenstevens/angular-boilerplate.git
$ mv angular-boilerplate <name of app>
$ cd <name of app>
$ npm install
$ bower install

// run app with ruby or http-server etc.. e.g.:
$ ruby -run -ehttpd . -p 8000

// open new tab
// If command not found: npm install -g karma-cli
$ karma start test/karma.config.js
```
