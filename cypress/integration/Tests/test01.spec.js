describe('Login agent2 and validate dashboard and lack of admin rights', function(){
    it('Sign in agent2', function(){
        cy.visit('https://otrs-test.sidnet.info/otrs/index.pl')
        cy.get('input[id="User"]').type('agent2')
        cy.get('input[type="password"]').type('test8192')
        cy.get('#LoginButton').click()
        cy.get('.MainBox').should('be.visible')
        cy.get('#ResponsiveNavigationHandle').click()
        cy.get('#nav-Admin').should('not.exist')
    })
})