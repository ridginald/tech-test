describe("Tech Test", () => {
  beforeEach(() => {
    cy.openProtectedUrl();
  });

  it("Should click the About Us link and navigate to the About Us page", () => {
    cy.get(`.col-xl-6 > [href="/about"]`).contains(`About Us`);
    cy.get(`.col-xl-6 > [href="/about"]`).click();

    cy.url().should("eq", Cypress.env(`baseUrl`) + "about");
    cy.get(`[data-testid="about-about-title"]`).contains(`About Us`);
  });

  it("Should click the Help link and navigate to the FAQ page", () => {
    cy.get(`.col-xl-6 > [href="/faqs"]`).contains(`Help`);
    cy.get(`.col-xl-6 > [href="/faqs"]`).click();

    cy.url().should("eq", Cypress.env(`baseUrl`) + "faqs");
    cy.get(`.col-11`).contains(`What would you like to know?`);
  });

  it("Should click the News link and navigate to the News page", () => {
    cy.get(`.col-xl-6 > [href="/news"]`).contains(`News`);
    cy.get(`.col-xl-6 > [href="/news"]`).click();

    cy.url().should("eq", Cypress.env(`baseUrl`) + "news");

    // The news page contains news items for Featured Content
    cy.get(`[data-testid="page-body"] > :nth-child(1)`).contains(
      `Featured Content`
    );
    cy.get(`:nth-child(2) > .card-grid`).find(`[data-testid="news-data"]`);

    // The news page contains news items for All Content
    cy.get(`[data-testid="page-body"] > :nth-child(3)`).contains(`All Content`);
    cy.get(`:nth-child(4) > .card-grid`).find(`[data-testid="news-data"]`);

    // The All Content section can be filtered to Webinar
    cy.get(`[data-testid="news-filter-button"]`).contains(`Filter by`);
    cy.get(`[data-testid="news-filter-button"]`).trigger("mouseover");
    cy.wait(1000);
    cy.get(`[data-testid="news-filter-checkbox-Webinar"]`).contains(`Webinar`);
    cy.wait(1000);
    cy.get(`[data-testid="news-filter-checkbox-Webinar"]`).click({
      force: true,
    });
    cy.get(`:nth-child(4) > .card-grid`).find(`[data-testid="news-data"]`);
    cy.get(`[class="pb_news_item__category_2vY1"]`).contains(`Webinar`);
  });

  it("Should click the Sign Up button and navigate to the Sign Up page", () => {
    cy.get(`.col-xl-3.d-none > .button--teal`).contains(`Sign up`);
    cy.get(`.col-xl-3.d-none > .button--teal`).click();

    cy.url().should("eq", Cypress.env(`baseUrl`) + "user/signup/");

    // uses randomly generated email address
    cy.emailAddress();

    // enters mismatching passwords
    cy.password();
    cy.repeatPassword();

    // The sign up page validates that passwords do not match
    cy.get(`.cta-1 > .d-flex`).click();
    cy.get(`[class="error"]`).contains(`Passwords do not match`);
  });
});
