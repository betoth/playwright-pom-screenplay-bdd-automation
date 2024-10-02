/**
 * Represents the menu page in the application.
 */
class MenuPage {
  constructor() {
    this.openMenuButton = '#react-burger-menu-btn'
    this.closeMenuButton = '#react-burger-cross-btn'
    this.logoutButton = '#logout_sidebar_link'
    this.resetAppButton = '#reset_sidebar_link'
  }

  /**
   * Static method to instantiate the MenuPage.
   * @returns {MenuPage} A new instance of the MenuPage.
   */
  static visit() {
    return new MenuPage()
  }
}

module.exports = { MenuPage }
