$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/FbLogin.feature");
formatter.feature({
  "name": "To validate login functionally of FB",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginUsingTable"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate using valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginUsingTable"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User enter invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "name",
        "pass",
        "email",
        "phno"
      ]
    },
    {
      "cells": [
        "greens",
        "greens@123",
        "greens@gmail.com",
        "9876543210"
      ]
    },
    {
      "cells": [
        "java",
        "java@123",
        "java@gmail.com",
        "8765432109"
      ]
    },
    {
      "cells": [
        "python",
        "python@123",
        "python@gamil.com",
        "7654321098"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_invalid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_invalid_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate forgot password function",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginUsingTable"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click forgot password button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_click_forgot_password_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Forgot password?\u0027]\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-0R60E7M\u0027, ip: \u0027192.168.1.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9c69c0ac277b1d70e69a0aa80fccf5a0, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Forgot password?\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\PARVEZ\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51343}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51343/devtoo..., se:cdpVersion: 97.0.4692.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c69c0ac277b1d70e69a0aa80fccf5a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.stepdefinition.StepDefinition.user_click_forgot_password_button(StepDefinition.java:52)\r\n\tat ✽.User click forgot password button(file:src/test/resources/Feature/FbLogin.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter values to text box",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_values_to_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});