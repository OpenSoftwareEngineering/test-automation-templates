import { Given, When, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';
import { Builder, Browser, By, Key, until } from "selenium-webdriver";

import "geckodriver";
import { log } from 'console';

Given('the login page is open', async function () {
  this.browser = await new Builder()
    .forBrowser(Browser.FIREFOX)
    .build();
  this.browser.get("https://www.saucedemo.com/");
})

When('I enter valid username and password in correct fields', async function () {
  await this.browser.findElement(By.name('user-name')).sendKeys('standard_user', Key.RETURN);
  await this.browser.findElement(By.name('password')).sendKeys('secret_sauce', Key.RETURN);
})

When('I click Login Button', async function () {
  await this.browser.findElement(By.name('login-button')).click();
})

Then('I am successfully logged in', async function () {
  let title = await this.browser.findElement(By.className('title')).getText();
  log(title);
  assert.equal (title, "Products");
})