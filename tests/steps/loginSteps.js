const { Given, When, Then } = require('@cucumber/cucumber')
const { Actor } = require('../../sauceDemo/actors/actor')
const { LoginTask } = require('../../sauceDemo/tasks/login/loginTask')
const { NavigateTo } = require('../../sauceDemo/interactions/navigateTo')
const { CheckElement } = require('../../sauceDemo/questions/checkElement')
const { BrowseTheWeb } = require('../../sauceDemo/abilities/browseTheWeb')
const { Users } = require('../../sauceDemo/data/users')
const { URLS } = require('../../config/constants')
const { LoginPage } = require('../../sauceDemo/pages/loginPage')
const assert = require('assert')
require('../support/hooks')

let actor

Given('the user is on the login page', async function () {
  actor = new Actor(Users.standardUser, this.page)
  actor.whoCan(BrowseTheWeb.using(this.page))
  await actor.attemptsTo(NavigateTo.the(URLS.LOGIN_PAGE))
})

When('the user logs in with valid credentials', async function () {
  await actor.attemptsTo(LoginTask.for(Users.standardUser))
})

When('the user logs in with locked out credentials', async function () {
  await actor.attemptsTo(LoginTask.for(Users.lockedOutUser))
})

When('the user logs in with problem user credentials', async function () {
  await actor.attemptsTo(LoginTask.for(Users.problemUser))
})

Then('the user should see the inventory page', async function () {
  const currentUrl = await this.page.url()
  assert.strictEqual(currentUrl, URLS.INVENTORY_PAGE, 'The URL is not the expected one after login')
})

Then('the user should see an error message', async function () {
  const loginPage = new LoginPage()
  const errorMessage = await actor.answer(CheckElement.contentOf(loginPage.errorMessageContainer))
  assert.strictEqual(errorMessage, 'Epic sadface: Sorry, this user has been locked out.')
})
