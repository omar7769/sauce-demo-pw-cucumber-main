class SideMenuPage {
    constructor() {
        this.logoutSidebarLink = '[data-test="logout-sidebar-link"]';
    }

    async logOut() {
        await page.click(this.logoutSidebarLink);
    }
}

module.exports = { SideMenuPage }