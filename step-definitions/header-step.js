const { When } = require('@cucumber/cucumber')
const { HeaderPage } = require('../page-objects/header-page')

const headerPage = new HeaderPage()

When('I click the burger menu', async () => {
    await headerPage.clickBurgerMenu()
})