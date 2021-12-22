describe('Login agent2 and validate admin rights', function(){
    it('Agent2 admin rights validation', function(){
        cy.visit('https://otrs-test.sidnet.info/otrs/index.pl')
        cy.get('input[id="User"]').type('agent2')
        cy.get('input[type="password"]').type('test8192')
        cy.get('#LoginButton').click()
        cy.get('#ResponsiveNavigationHandle').click()        
        cy.get('#nav-Admin').should('be.visible')
    })
})