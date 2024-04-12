const { When, Then } = require('@cucumber/cucumber')
const { InventoryPage } = require('../page-objects/inventory-page')

const inventoryPage = new InventoryPage()

Then('I see the inventory page', async function () {
    await inventoryPage.inventoryListIsVisible()
})

When('I add the items', async function () {
    await inventoryPage.addItems()
})

When('I click the Cart icon', async () => {
    await inventoryPage.clickShoppingCart();
})