Feature: User Login

  As a valid user
  I want to be able to log into the SauceDemo app
  So that I can access the inventory page

  Scenario: Login with standard user
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should see the inventory page

  Scenario: Login with locked out user
    Given the user is on the login page
    When the user logs in with locked out credentials
    Then the user should see an error message

  Scenario: Login with problem user
    Given the user is on the login page
    When the user logs in with problem user credentials
    Then the user should see the inventory page
