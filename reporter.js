const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  screenshotsDirectory: 'screenshots/',
  storeScreenshots: true,
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chrome 54.0',
    Platform: 'Windows 10',
  },
}

reporter.generate(options)
