const { When } = require('@cucumber/cucumber')
const { CartPage } = require('../page-objects/cart-page')

const cartPage = new CartPage()

When('I remove {string} from the cart', async (itemName) => {
    await cartPage.removeItem(itemName);
})

When('I click the Checkout button', async () => {
    await cartPage.clickCheckout();
})