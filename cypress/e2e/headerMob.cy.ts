describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })

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