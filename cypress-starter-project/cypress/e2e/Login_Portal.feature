# these are tags
@login @regression

Feature: WebdriverUniversity - Login Portal

    Background: Pre conditions
        # Given I navigate to the webdriveruniversity Login Portal // the way I did it initially (which also worked)
        Given I navigate to the webdriveruniversity homepage
        When I wait for 0 seconds
        And I click on the login portal button

    Scenario Outline: Validate valid and invalid login credentials
        And I type a username <username> and a password <password>
        And I click on the login button
        Then I should be presented with an alert saying '<alertText>'

        Examples:
            | username  | password      | alertText            |
            | webdriver | webdriver123  | validation succeeded |
            | webdriver | wrongPassword | validation failed    |