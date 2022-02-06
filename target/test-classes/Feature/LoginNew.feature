@LoginUsingOutline
Feature: To validate FaceBook login functionallity
@sanity
Scenario Outline: To validate using email and password
    Given I must be in fb login page
    When I enter values to emailfiled "<emailfeild>" and passwordfiled "<passwordfeild>"
    And I clicked the login button
    Then I have validate output and quit browser

    Examples: 
      | emailfeild       | passwordfeild |
      | greens@gmail.com | Greens@123    |
      | java@gmail.com   | Java@123      |
      | python@gmail.com | Python@123    |
