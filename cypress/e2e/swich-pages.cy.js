describe('SwitchPages', () => {
    it('transition', () => {
        cy.visit('/')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })
        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Аренда').click()
        cy.url().should('include', '/adverts/rent')
        // cy.get('[placeholder="Login"]').type('admin')
        // cy.get('[placeholder="Login"]').should('have.value', 'admin')
    })
})