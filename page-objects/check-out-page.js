class CheckOutPage {
    constructor() {
        this.firstNameField = '[data-test="firstName"]';
        this.lastNameField = '[data-test="lastName"]';
        this.postalCodeField = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.cancelButton = '[data-test="cancel"]';
        this.finishButton = '[data-test="finish"]';
        this.orderMessage = '[data-test="complete-header"]';
        this.backHomeButton = '[data-test="back-to-products"]';
        this.totalLabel = '[data-test="total-label"]';
    }

    async fillOutCheckoutForm(firstName, lastName, postalCode) {
        await page.fill(this.firstNameField, firstName);
        await page.fill(this.lastNameField, lastName);
        await page.fill(this.postalCodeField, postalCode);
    }

    async continueCheckout() {
        await page.click(this.continueButton);
    }

    async checkTotalAndProceed() {
        const totalText = await page.textContent(this.totalLabel);
        const total = parseFloat(totalText.replace('Total: $', ''));

        if (total <= 40) {
            console.log(`Total of ${total} is less than or equal to 40, proceeding with the order`);
            await this.clickFinish();
            await this.checkOrderMessage();
            await this.backHome();
        } else {
            console.log(`Total of ${total} is greater than 40, cancelling the order`);
            await this.clickCancel();
        }
    }

    async clickCancel() {
        await page.click(this.cancelButton);
    }

    async clickFinish() {
        await page.click(this.finishButton);
    }

    async checkOrderMessage() {
        const message = await page.textContent(this.orderMessage);
        assert.strictEqual(message, 'Thank you for your order!');
    }

    async backHome() {
        await page.click(this.backHomeButton);
    }
}

module.exports = { CheckOutPage };