const { When } = require('@cucumber/cucumber')
const { CommonPage } = require('../page-objects/common-page')

const commonPage = new CommonPage()

When('I wait for 3 seconds', async function () {
    await commonPage.pause()
})