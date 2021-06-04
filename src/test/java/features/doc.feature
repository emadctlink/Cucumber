Feature: Automate leaftaps Application


Scenario: TC001_LoginLogout

Given launch chormeBrowser and load url
And enter userName as DemoSalesManager
And enter password as crmsfa
When click the login button
Then It is navigate homepage
And click the logout button
And close browser


Scenario: TC002_Login for Failure 
Given launch chormeBrowser and load url
And enter userName as Zimam
And enter password as crmsfa
When click the login button
Then It is navigate samepage
But verify error massage
