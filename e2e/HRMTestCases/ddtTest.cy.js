

describe("This test case test with the invalid login credentials",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error(err);
        return false; // Prevent Cypress from failing the test
      });
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       // cypress.fixture("invalideCredentials.json").as(data);
    })
it("Using with the fixtures test the DDT",()=>{
    cy.fixture("invalidCredentials").then((invalidData)=>{
        invalidData.forEach(({userName,password})=>{
//cypress.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
cy.get("[name='username']").clear().type(userName);
cy.get("[type='password']").clear().type(password);
cy.get("[type='submit']").click();

//cy.get(".oxd-text oxd-text--p oxd-alert-content-text")
cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
.should('be.visible')
.and('contain','Invalid credentials');
})
    })
})
})



