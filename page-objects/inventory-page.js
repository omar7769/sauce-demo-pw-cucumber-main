const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse/sync');

class InventoryPage {
    constructor() {
        this.inventoryList = '.inventory_list';
        this.shoppingCart = '#shopping_cart_container';
        this.testData = this.loadTestData();
        this.inventoryItem = (itemKey) => `.inventory_item:has-text("${itemKey}")`;
        this.addItemButton = (itemKey) => `${this.inventoryItem(itemKey)} .pricebar button`;
    }

    loadTestData() {
        return parse(fs.readFileSync(path.join(__dirname, '..', 'testData', 'testData.csv')), { columns: true, skip_empty_lines: true });
    }

    async inventoryListIsVisible() {
        await page.waitForSelector(this.inventoryList);
    }

    async addItems() {
        for (const item of this.testData) {
            for (const key in item) {
                const element = await page.$(this.inventoryItem(item[key]));
                if (element) {
                    await page.click(this.addItemButton(item[key]));
                } else {
                    console.log(`Item "${item[key]}" is not visible on the screen`);
                }
            }
        }
    }

    async clickShoppingCart() {
        await page.click(this.shoppingCart);
    }
}

module.exports = { InventoryPage }