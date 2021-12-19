describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://otrs-test.sidnet.info/otrs/index.pl')
        cy.get('input[id="User"]').type('admin2')
        cy.get('input[type="password"]').type('test8192')
        cy.get('#LoginButton').click()

        cy.get('#ResponsiveNavigationHandle').click()        
        cy.contains('Administracja').click()
        cy.get('[title="Zarządzanie relacjami Agenci <-> Grupy"]').click()
        cy.contains('agent2').click()
        cy.get('[title="Przełącz uprawnienie odczyt/zapis dla admin"]').click()
        cy.get('[title="Przełącz uprawnienie priorytet dla admin"]').click()
        cy.get('[title="Przełącz uprawnienie właściciel dla admin"]').click()
        cy.get('[title="Przełącz uprawnienie uwaga dla admin"]').click()
        cy.get('[title="Przełącz uprawnienie utwórz dla admin"]').click()
        cy.get('[title="Przełącz uprawnienie przenieś do dla admin"]').click()
        cy.get('[title="Przełącz uprawnienie odczyt dla admin"]').click()


        cy.get('#SubmitAndContinue').click()



        cy.get('#ResponsiveNavigationHandle').click()        
        cy.contains('Administracja').click()
        cy.get('[title="Zarządzanie listą agentów."]').click()
        cy.contains('agent2').click()
        cy.get('td').children().should('not.contain', 'admin')
    })
})