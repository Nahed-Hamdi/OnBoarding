// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('Verify',(mobile)=>{
    cy.request({
        failOnStatusCode: true,
        method: 'POST',
        url: 'onboarding-rps.hs-staging.com/api/v1/otp',
    })
})
















Cypress.Commands.add('getCode', () => {
    cy.request({
        failOnStatusCode: true,
        method: 'POST',
        url: 'http://onboarding-rps.hs-staging.com/api/v1/otp',
        body: { mobile: '966535940841'}
    }).then((resp) => {
        const code =  resp.body.data.code;
        return code ;
    });
    return code ;
});
















Cypress.Commands.add('login', (mobile) => {
    cy.request({
        failOnStatusCode: true,
        method: 'POST',
        url: 'http://onboarding-rps.hs-staging.com/api/v1/otp',
        body: { mobile: '966535940841'}
    }).then((resp) => {
        cy.request({
            failOnStatusCode: true,
            method: 'POST',
            url: 'http://onboarding-rps.hs-staging.com/api/v1/verify',
            body: {
                mobile:'966535940841',
                code: resp.body.data.code
            }
        }).then((resp) => {
            return resp.body.data.token ;
        });
    });
});