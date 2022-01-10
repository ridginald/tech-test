Cypress.Commands.add(`openProtectedUrl`, () => {
  cy.visit(Cypress.env(`baseUrl`), {
    failOnStatusCode: false,
    auth: {
      username: Cypress.env(`protected_url_username`),
      password: Cypress.env(`protected_url_password`),
    },
  });
});

// create random number between 5 and 15

function randomInt(min) {
  return Math.floor(Math.random() * (15 - min + 1) + min);
}

// create random emails/passwords 5 and 15 characters long

function makeRandom(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

Cypress.Commands.add("emailAddress", () => {
  cy.get('[name="email"]').type(makeRandom(randomInt(5)) + "@email.com");
});

Cypress.Commands.add("password", () => {
  cy.get('[name="password"]').type(makeRandom(randomInt(6)));
});

Cypress.Commands.add("repeatPassword", () => {
  cy.get('[name="confirmPassword"]').type(makeRandom(randomInt(8)));
});
