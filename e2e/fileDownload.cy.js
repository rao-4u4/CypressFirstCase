///<reference types='cypress'/>;
import 'cypress-downloadfile/lib/downloadFileCommand';


describe("to verify the test case of fileDownload",()=>{
   
it("the user shouhttps://tld be able to download the file link",()=>{
cy.visit("the-internet.herokuapp.com/download");
cy.url().should('include',"internet");
const filename='20MB.bin';

    //cy.get("a[href='download/SomeFile.txt']")
cy.contains("20MB.bin")
    .click();
    cy.wait(2000);
cy.task('https://the-internet.herokuapp.com/download','cypress/downloads','20MB.bin');
cy.readFile(`cypress/downloads/${filename}`).should("exist");
})


})