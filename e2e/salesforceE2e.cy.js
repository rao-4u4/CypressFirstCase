describe("it test the login for salesforce",()=>{

it("this the test for loginfunctionality",()=>{
cy.visit("");
cy.get("#username").type(Cypress.env('username'));
cy.get("[type='password']").type(Cypress.env('password'));
cy.get("#Login").click();


})

})