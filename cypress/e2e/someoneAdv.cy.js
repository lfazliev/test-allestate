describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/krasnodar/adverts/rent')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })
        cy.contains('поселок Российский').click()
        cy.get('.galery')
            .find('.v-window__controls')
            .find('.rl').click()
    })
})