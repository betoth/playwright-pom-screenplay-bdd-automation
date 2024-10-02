Feature: Add to cart functionality

  As a registered user
  I want to add products to my cart
  So that I can purchase them later

  @requiresLogin
  Scenario: Add an item to the cart
    Given the user is on the inventory page
    When the user adds a product to the cart
    Then the user should see the product in the cart
