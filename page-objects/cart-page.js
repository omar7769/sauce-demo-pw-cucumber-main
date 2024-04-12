class CartPage {
    constructor() {
        this.removeItemButton = (itemName) => `.cart_item_label:has-text("${itemName}") .item_pricebar button`;
        this.checkoutButton = 'button#checkout';
    }

    async removeItem(itemName) {
        await page.click(this.removeItemButton(itemName));
    }

    async clickCheckout() {
        await page.click(this.checkoutButton);
    }
}

module.exports = { CartPage }