const { Given, When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit the login page', async function () {
  await loginPage.navigateToLoginScreen()
})

When('I fill the login form with valid credentials', async function () {
  await loginPage.submitLoginForm()
})

Then('I am on the login page', async () => {
  await loginPage.usernameFieldIsVisible()
})