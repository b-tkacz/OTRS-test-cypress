describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://otrs-test.sidnet.info/otrs/index.pl')
        cy.get('input[id="User"]').type('agent2')
        cy.get('input[type="password"]').type('test8192')
        cy.get('#LoginButton').click()
        cy.get('#ResponsiveNavigationHandle').click()        
        cy.contains('Administracja').should('be.visible')
    })
})