const { When } = require('@cucumber/cucumber')
const { CheckOutPage } = require('../page-objects/check-out-page')

const checkoutPage = new CheckOutPage()

When('I enter {string} as First Name, {string} as Last Name, and {string} as Postal Code', async (firstName, lastName, postalCode) => {
    await checkoutPage.fillOutCheckoutForm('John', 'Doe', '12345');
})

When('I click the Continue button', async () => {
    await checkoutPage.continueCheckout();
})

When('I check the total and proceed accordingly', async () => {
    await checkoutPage.checkTotalAndProceed();
})