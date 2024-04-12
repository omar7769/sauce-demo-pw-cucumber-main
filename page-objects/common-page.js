class CommonPage {
    async pause() {
        await page.waitForTimeout(3000)
    }
}

module.exports = { CommonPage }