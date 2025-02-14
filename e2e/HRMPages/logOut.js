class logOutPage {
    dropDown() {
        cy.get(".oxd-userdropdown",{timeout:5000})
          .should('be.visible') // Ensure element is visible
          .click();
    }

    logOutButton() {
        cy.contains('Logout', { timeout: 50000 }) // Locate the logout button
          .should('be.visible') // Ensure it is visible
          .click();
    }
}

export default logOutPage;
