describe('header', () => {
    cy.intercept('https://mc.yandex.md/**', { log: false })
    cy.intercept('https://mc.yandex.ru/**', { log: false })
    it('desktop', () => {
        cy.viewport(1300, 1000)
        cy.visit('/krasnodar')
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
    it('mobile', () => {
        cy.visit('/krasnodar')
        cy.get('#menuActivator').click()
        cy.get('.v-overlay__content').as('abrik')
        cy.get('.v-overlay__content').find('a').each((el, i: number) => {
            cy.get('@abrik').find('a').eq(i).then((el) => {
                const href = el.attr('href')
                if (!href.includes('https://')) {
                    cy.wrap(el).click({ scrollBehavior: false })
                    cy.url().should('include', href)
                }
            })
            // const nscroll = true
            // cy.checklink($el, nscroll)

            cy.get('#menuActivator').click()
        })

        cy.get('header').find('div.icons').find('a').each(($el) => {
            cy.checklink($el)
        })

    })
})