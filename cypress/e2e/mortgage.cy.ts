
describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/mortgage/all_programs')
        cy.contains('Ипотека на новостройки').click()
        cy.url().should('include', '/mortgage/programs/new')
        cy.get('input[aria-label="Стоимость"]').as('range').invoke('val', 10000000).trigger('change')
        cy.get('input[aria-label="Стоимость"]').siblings('b').should('have.text', '25')
    })
})