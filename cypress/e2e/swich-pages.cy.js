describe('SwitchPages', () => {
    it('transition', () => {
        cy.visit('/')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })
        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Аренда').click()
        cy.url().should('include', '/adverts/rent')
        cy.contains('поселок Российский').click()
        cy.get('.galery')
            .find('.v-window__controls')
            .find('.rl').click()
        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Продажа').click()
        cy.url().should('include', '/adverts/buy')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Ипотека').click()
        cy.url().should('include', '/mortgage/all_programs')
        // cy.get('input[aria-label="Стоимость"]').as('range').invoke('val', 10000000).trigger('change')
        // cy.get('input[aria-label="Стоимость"]').siblings('b').should('have.text', '25')
        cy.contains('Ипотека на новостройки').click()
        cy.url().should('include', '/mortgage/programs/new')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Риелторы').click()
        cy.url().should('include', '/rieltors')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Новости').click()
        cy.url().should('include', '/news')



        // cy.get('[data-v-25230f8d]').click()
        // cy.get('[placeholder="Login"]').type('admin')
        // cy.get('[placeholder="Login"]').should('have.value', 'admin')
    })
})