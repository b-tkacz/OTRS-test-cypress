describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://otrs-test.sidnet.info/otrs/index.pl')
        cy.get('input[id="User"]').type('admin2')
        cy.get('input[type="password"]').type('test8192')
        cy.get('#LoginButton').click()
        cy.get('#ResponsiveNavigationHandle').click()        
        cy.contains('Administracja').click()
        cy.get('[title="Zarządzanie listą agentów."]').click()
        cy.contains('agent2').click()
        cy.get('tr').children().should('not.contain', 'admin')

        cy.get('#ResponsiveNavigationHandle').click()        
        cy.contains('Administracja').click()
        cy.get('[title="Zarządzanie relacjami Agenci <-> Grupy"]').click()
        cy.contains('agent2').click()
        cy.get('[title="Przełącz uprawnienie odczyt/zapis dla admin"]').click()
        cy.get('#SubmitAndContinue').click()

        cy.get('#ResponsiveNavigationHandle').click()        
        cy.contains('Administracja').click()
        cy.get('[title="Zarządzanie listą agentów."]').click()
        cy.contains('agent2').click()
        cy.get('td').children().should('contain', 'admin')
    })
})