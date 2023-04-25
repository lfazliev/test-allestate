describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })
        cy.get('footer').find('a').each(($el, index) => {
            const href = $el.attr('href')
            if (!href.includes('https://')) {
                cy.wrap($el).click()
                cy.url().should('include', href)
            }
        })
    })
})