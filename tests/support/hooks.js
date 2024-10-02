const { Before, After } = require('@cucumber/cucumber')
const { Actor } = require('../../sauceDemo/actors/actor')
const { LoginTask } = require('../../sauceDemo/tasks/login/loginTask')
const { BrowseTheWeb } = require('../../sauceDemo/abilities/browseTheWeb')
const { Users } = require('../../sauceDemo/data/users')
const { LoginPage } = require('../../sauceDemo/pages/loginPage')
const { chromium } = require('playwright')

/**
 * Initializes the Playwright browser and page before each scenario.
 */
let browser

Before(async function () {
  browser = await chromium.launch({ headless: false })
  this.page = await browser.newPage()
})

/**
 * Logs in the user before scenarios tagged with '@requiresLogin'.
 */
Before({ tags: '@requiresLogin' }, async function () {
  const actor = new Actor(Users.standardUser, this.page)
  actor.whoCan(BrowseTheWeb.using(this.page))

  const loginPage = new LoginPage()
  await this.page.goto(loginPage.pageUrl)
  await actor.attemptsTo(LoginTask.for(Users.standardUser))
})

/**
 * Closes the browser after each scenario.
 */
After(async function () {
  await this.page.close()
  await browser.close()
})
