# Getting Started:
1. Install dependencies - `npm install`
2. Install browsers - `npx playwright install`

# Running Test:
1. Run tests & open HTML report - `npm test`


# Key Components
**Feature Files**: These are `.feature` files written in Gherkin language to define the behavior of the application from the user's perspective.

**Page Objects**: These are JavaScript classes that encapsulate the behavior of a page in the application. They provide an interface to interact with the page in the tests.

**Step Definitions**: These are JavaScript files that map the steps in your Gherkin feature files to JavaScript code. Each step definition file corresponds to a specific feature of the application and contains the code to execute for each step in that feature. They provide the link between the human-readable scenarios in the feature files and the code that tests the application.

**Test Data**: The `testData.csv` file contains test data used in the tests. This allows for easy modification of test data without changing the test code.

**Reporter**: The `reporter.js` file configures and generates an HTML report for the tests using the `cucumber-html-reporter` package. It specifies options such as the report theme, output location, whether to store screenshots, and additional metadata. The report is automatically generated after the tests are run. The HTML report is generated in the `reports` folder. Failure screenshots are generated in the `screenshots` folder & added to the HTML report.

**Hooks**: The `hooks.js` file contains setup and teardown code that is run before and after each scenario or step.

**Assertions**: The assertions.js file is a part of the test framework that sets up the assertion library for the tests. It uses the chai assertion library, which provides a rich set of assertions that you can use to write your test validations. This file makes the chai assertion methods globally available to all test files, eliminating the need to import chai in each individual test file.

**Configuration**: The `cucumber.js` file sets the default command-line options for Cucumber.js, simplifying the command needed to run the tests. It includes the setup files, step definition files, and feature files to be loaded for test execution.

**GitHub Actions**: The `playwright.yml` file is a GitHub Actions workflow that automatically runs the Playwright tests whenever there's a push or pull request to the main branch. It sets up the testing environment on an Ubuntu machine, installs the necessary dependencies and Playwright browsers, and then runs the tests. If any test fails, it uploads the test report as an artifact, which can be downloaded and reviewed later. This continuous integration process ensures that changes do not break existing functionality.

# Notes:
- To run the tests in headed mode, set `headless: false` in `hooks.js`.