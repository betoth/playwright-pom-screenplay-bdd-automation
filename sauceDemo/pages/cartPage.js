const { URLS } = require('../../config/constants')

/**
 * Represents the cart page in the application.
 */
class CartPage {
  /**
   * @param {Page} page - The Playwright page instance used to interact with the cart page.
   */
  constructor(page) {
    this.page = page
    this.pageUrl = URLS.CART_PAGE
    this.cartItemSelector = (productName) => `text=${productName}`
  }
}

module.exports = { CartPage }
