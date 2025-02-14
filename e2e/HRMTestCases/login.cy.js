import LoginPage from '../HRMPages/LoginPage.js';
import logOutPage from '../HRMPages/logOut.js'
///<reference types='Cypress'/>

describe("Login Test",()=>{
    const login = new LoginPage();
    const logout = new logOutPage();

    it("should login and logout with valid credentials",()=>{
login.visit();
login.fillUserName('Admin');
login.fillPassword("admin123");
login.submit();

cy.url().should('contain','orangehrmlive');

       // cy.contains('Login', { timeout: 10000 }).should('be.visible'); // Confirm redirect to login page
    

       logout.dropDown();
        logout.logOutButton();
    
        // Add assertion to confirm logout
        });
    
})



