Feature: Sauce Demo

  Scenario: Complete purchase & log out
    Given I visit the login page
    When I fill the login form with valid credentials
    Then I see the inventory page
    When I add the items
    And I click the Cart icon
    And I remove 'Sauce Labs Bike Light' from the cart
    And I click the Checkout button
    And I enter 'John' as First Name, 'Doe' as Last Name, and '123' as Postal Code
    And I click the Continue button
    And I check the total and proceed accordingly
    And I click the burger menu
    And I log out
    Then I am on the login page
    And I wait for 3 seconds