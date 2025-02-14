/*describe("environmentvariables",()=>{

   it("devolopurl",()=>{
   const durl = Cypress.env("devurl");
   cy.log(`Dev URL: ${durl}`);
    expect(durl, "Dev URL is defined").to.be.a("string");
   cy.visit(durl);
    });
    it("stagingurl",()=>{
    const sturl = Cypress.env("stagingurl");
    cy.log(`Staging URL: ${sturl}`);
    expect(sturl, "Staging URL is defined").to.be.a("string");
    cy.visit(sturl);
    });
    it("prodcturl",()=>{
const prod = Cypress.env("produrl");
cy.log(`Prod URL: ${prod}`);
expect(prod, "Prod URL is defined").to.be.a("string");
cy.visit(prod);
    });*/
    describe("Environment Variables", () => {
        it("devolopurl", () => {
          const durl = Cypress.env("devurl") || "https://default-dev-url.com";
          cy.visit(durl);
        });
      
        it("stagingurl", () => {
          const sturl = Cypress.env("stagingurl") || "https://default-staging-url.com";
          cy.visit(sturl);
        });
      
        it("prodcturl", () => {
          const prod = Cypress.env("produrl") || "https://default-prod-url.com";
          cy.visit(prod);
        });
      });
      
