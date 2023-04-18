describe('mainPage', () => {
    it('testSection', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })

        cy.get("div.mortgageSection").contains('жилого дома').click()
        cy.url().should('include', '/mortgage/programs/secondary')

        cy.go('back')
        cy.get("div.mortgageSection").contains('Под залог').click()
        cy.url().should('include', '/mortgage/programs/secondary_free')

        cy.go('back')
        cy.get("div.mortgageSection").contains('от застройщика').click()
        cy.url().should('include', '/mortgage/programs/new')
        cy.go('back')
    })
})