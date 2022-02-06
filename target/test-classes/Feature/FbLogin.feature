@LoginUsingTable
Feature: To validate login functionally of FB

  Background: 
    Given User must be in facebook login page

  @smoke
  Scenario: To validate using valid username and invalid password
    When User enter invalid username and invalid password
      | name   | pass       | email            | phno       |
      | greens | greens@123 | greens@gmail.com | 9876543210 |
      | java   | java@123   | java@gmail.com   | 8765432109 |
      | python | python@123 | python@gamil.com | 7654321098 |
    And User click login button
    Then User must be in invalid login page

  @sanity @regression
  Scenario: To validate forgot password function
    When User click forgot password button
    And User enter values to text box
    Then User click search button
