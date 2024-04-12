class HeaderPage {
    constructor() {
        this.burgerMenuButton = '#react-burger-menu-btn';
    }

    async clickBurgerMenu() {
        await page.click(this.burgerMenuButton);
    }
}

module.exports = { HeaderPage }