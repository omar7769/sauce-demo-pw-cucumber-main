class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com/';
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
  }

  async navigateToLoginScreen() {
    await page.goto(this.url);
  }

  async submitLoginForm() {
    await page.fill(this.usernameField, 'standard_user');
    await page.fill(this.passwordField, 'secret_sauce');
    await page.click(this.loginButton);
  }

  async submitLoginWithParameters(username, password) {
    await page.fill(this.usernameField, username);
    await page.fill(this.passwordField, password);
    await page.click(this.loginButton);
  }

  async usernameFieldIsVisible() {
    const isVisible = await page.locator(this.usernameField).isVisible();
    expect(isVisible).to.be.true;
  }
}

module.exports = { LoginPage }