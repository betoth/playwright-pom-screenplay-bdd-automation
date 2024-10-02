const { CheckElement } = require('../../interactions/checkElement')
const { InventoryPage } = require('../../pages/inventoryPage')

/**
 * Represents an interaction to retrieve the cart item count (shopping cart badge).
 */
class CartItemCount {
  /**
   * Retrieves the text content of the cart item count (shopping cart badge).
   *
   * @param {Actor} actor - The actor performing the interaction.
   * @returns {Promise<string>} The text content of the shopping cart badge.
   */
  async performAs(actor) {
    const inventoryPage = new InventoryPage()
    return actor.attemptsTo(CheckElement.contentOf(inventoryPage.cartIcon))
  }

  /**
   * Static method to create a new instance of CartItemCount.
   *
   * @returns {CartItemCount} A new instance of CartItemCount.
   */
  static check() {
    return new CartItemCount()
  }
}

module.exports = { CartItemCount }
