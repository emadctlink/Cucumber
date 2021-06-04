$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/doc.feature");
formatter.feature({
  "name": "Automate leaftaps Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC001_LoginLogout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "launch chormeBrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChormeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userName as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUserNameAsDemoSalesManager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It is navigate homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itIsNavigateHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clickTheLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002_Login for Failure",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "launch chormeBrowser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.launchChormeBrowserAndLoadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userName as Zimam",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterUserNameAsZimam()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.enterPasswordAsCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It is navigate samepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.itIsNavigateSamepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error massage",
  "keyword": "But "
});
formatter.match({
  "location": "LoginTest.verifyErrorMassage()"
});
formatter.result({
  "status": "passed"
});
});