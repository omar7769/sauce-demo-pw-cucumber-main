const { When } = require('@cucumber/cucumber')
const { SideMenuPage } = require('../page-objects/side-menu-page')

const sideMenuPage = new SideMenuPage()

When('I log out', async () => {
    await sideMenuPage.logOut()
})