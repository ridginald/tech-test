# Installaton

1. Clone this repo to your local
2. Open Terminal in 'tech-test' dir
3. Terminal: `npm i`
4. Duplicate the file `cypress.env.example.json` and rename to `cypress.env.json` - enter the relevant details (from QA Test instructions)
5. Open the test suite using: `npm run tech:test` (test file situated in cypress/integration)

##### Tests

Each it block/all tests check that the header contains the correct text, as well as, redirects to the correct URL - added additional checks to ensure that there's some content on the page too. 

On the News page, we check that the relevant card grids contain the news-data testId, which should indicate that the news items are present - but when the content is filtered by Webinar, there's an additional check to assert that the category text on the news items has also changed to Webinar.

With Sign Up , we should enter a random email address every time the test is run, as well as, two random passwords so that we're able to assert that the `do not match` error is present when submitted with mismatching passwords. 

##### Custom Commands

Two functions: `randomInt` to create a random number between a number specified and 15. `makeRandom` to create a random selection of characters (letters and numbers) between the `randomInt` number and 15 - these are used to randomly generate both email addresses and passwords, and each have been set as custom commands in: cypress/support/commands.js 

`openProtectedUrl` command visits baseUrl, and logs in to the playground with the relevant credentials when added to `cypress.env.json`

# Observations

Text in `home-hero-title` on home page overlaps image and both are the same colour, which makes it difficult to read

How it works carousel seems oddly aligned
