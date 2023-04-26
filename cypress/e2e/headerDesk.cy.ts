describe('headerMob', () => {
    it('transition', () => {
        cy.viewport(1300, 1000)
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })

        cy.get('header').find('.ml20').find('a').each(($el) => {
            cy.checklink($el)
        })
        cy.get('header').find('div.icons').find('a').each(($el) => {
            cy.checklink($el)
        })


        cy.get('header').find("div.city").click({ scrollBehavior: false })
        cy.get("div.modalCity").find('input')
            .type('Москва', { scrollBehavior: false })

        cy.get("div.modalCity")
            .find('input').should('have.value', 'Москва')

        cy.get("div.modalCity").find('input')
            .parent().siblings('.vue-dadata__suggestions').children('span').first()
            .click({ scrollBehavior: false })
        cy.url().should('include', '/moscow')
        cy.get('h1').contains('Недвижимость в Москве')
    })
})