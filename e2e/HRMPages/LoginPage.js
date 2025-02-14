class LoginPage{

visit(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().then((url) => cy.log(`Current URL: ${url}`));

}
fillUserName(userId){
cy.get("[name='username']").type(userId);
}
fillPassword(password){
    cy.get("[type='password']").type(password);
}
submit(){
    cy.get("[type='submit']").click();
}

}
export default LoginPage;