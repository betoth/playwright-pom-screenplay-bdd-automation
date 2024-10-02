const { Given, When, Then } = require('@cucumber/cucumber')
const { Actor } = require('../../sauceDemo/actors/actor')
const { AddItemToCart } = require('../../sauceDemo/tasks/inventory/addItemToCart')
const { NavigateTo } = require('../../sauceDemo/interactions/navigateTo')
const { CheckElement } = require('../../sauceDemo/questions/checkElement')
const { BrowseTheWeb } = require('../../sauceDemo/abilities/browseTheWeb')
const { NavigateToCart } = require('../../sauceDemo/interactions/navigateToCart')
const { InventoryPage } = require('../../sauceDemo/pages/inventoryPage')
const products = require('../../sauceDemo/data/products')
const assert = require('assert')
require('../support/hooks')

let actor

Given('the user is on the inventory page', async function () {
  actor = new Actor(this.page)
  actor.whoCan(BrowseTheWeb.using(this.page))
  await actor.attemptsTo(NavigateTo.the(new InventoryPage().pageUrl))
})

When('the user adds a product to the cart', async function () {
  await actor.attemptsTo(AddItemToCart.forProduct(products.sauceLabsBackpack))
})

Then('the user should see the product in the cart', async function () {
  await actor.attemptsTo(NavigateToCart.onInventoryPage())
  const cartItemCount = await actor.answer(CheckElement.contentOf(new InventoryPage().cartIcon))
  assert.strictEqual(Number(cartItemCount), 1, 'The item was not correctly added to the cart')
})
