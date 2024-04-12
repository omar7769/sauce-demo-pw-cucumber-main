const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async () => {
  global.browser = await playwright['chromium'].launch({ headless: true })
})

AfterAll(async () => {
  await global.browser.close()
})

Before(async () => {
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const img = await global.page.screenshot({ path: `screenshots/${scenario.pickle.name}.png` })
    await this.attach(img, 'image/png')
  }
  await global.page.close()
  await global.context.close()
})
