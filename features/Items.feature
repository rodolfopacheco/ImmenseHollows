Feature: Immense Hollows Items

Scenario Outline: As a user I can add a new item
    Given I Navigate to Stranger List page
    Then I Add a New Item

Scenario Outline: As a user I can edit an existing item
    Given I Navigate to Stranger List page
    Then I Edit Another Existing Item

Scenario Outline: As a user I can delete an existing item
    Given I Navigate to Stranger List page
    Then I Delete an Existing Item

Scenario Outline: As a user I validate the description max length
    Given I Navigate to Stranger List page
    Then I Validate Description Max Length

Scenario Outline: As a user I can search an specific item
    Given I Navigate to Stranger List page
    Then I Search for an Specific Item
