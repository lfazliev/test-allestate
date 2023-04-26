describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })
        cy.get('footer').find('a').each(($el) => {
            cy.checklink($el)
        })
    })
})