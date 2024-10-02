const { URLS } = require('../../config/constants')

/**
 * Represents the login page in the application.
 */
class LoginPage {
  constructor() {
    this.usernameInput = '#user-name'
    this.passwordInput = '#password'
    this.loginButton = '#login-button'
    this.errorMessageContainer = '.error-message-container'
    this.pageUrl = URLS.LOGIN_PAGE
  }
}

module.exports = { LoginPage }
