@login
Feature: Login to the application
  As an customer
  I want to login to the application
  So that I can access profile specific pages
  
  Scenario: I should be able to successfully login
    Given the login page is open
    When I enter valid username and password in correct fields
    And I click Login Button
    Then I am successfully logged in