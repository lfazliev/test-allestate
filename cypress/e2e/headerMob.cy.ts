describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').find('a[href="/krasnodar/adverts/rent"]')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/adverts/rent')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Продажа')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/adverts/buy')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').find('a[href="/mortgage/all_programs"]')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/mortgage/all_programs')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').contains('Риелторы')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/rieltors')

        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').find('a[href="/news"]')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/news')

        cy.get('a[href="/lk/favourites"]').click()
        cy.url().should('include', '/lk/favourites')

        cy.get('div.icons').find('a[href="/lk/comparisons"]').click()
        cy.url().should('include', '/lk/comparisons')

        cy.get('div.icons').find('a[href="/lk/messages"]').click()
        cy.url().should('include', '/lk/messages')

        cy.get('div.icons').find('a[href="/lk/notifications"]').click()
        cy.url().should('include', '/lk/notifications')

    })
})