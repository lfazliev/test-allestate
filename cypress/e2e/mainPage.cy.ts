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

        cy.get("div.findRieltor").find('button.mainButton').click()
        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="Продать"]').type('1')
        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="Продать"]').should('have.value', '1')

        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="Квартира во вторичке"]').type('1')
        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="Квартира во вторичке"]').should('have.value', '1')

        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="Имя"]').type('1')
        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="Имя"]').should('have.value', '1')

        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="+7"]').type('1')
        cy.get('div.v-overlay__content').find('div.popupModal').find('input[placeholder="+7"]').should('have.value', '1')

        cy.get('div.v-overlay__content').find('div.popupModal').find('textarea[placeholder="Нужен риелтор, специализирующийся на сложных продажах"]').type('1')
        cy.get('div.v-overlay__content').find('div.popupModal').find('textarea[placeholder="Нужен риелтор, специализирующийся на сложных продажах"]').should('have.value', '1')

        cy.get('div.v-overlay__content').find('div.popupModal').contains('В каком городе?').siblings('div').find('input').invoke('val', '1')
        cy.get('div.v-overlay__content').find('div.popupModal').contains('В каком городе?').siblings('div').find('input').should('have.value', '1')

        cy.get('div.v-overlay__content').find('div.popupModal').find('a[href="/privacy"]').click()
        cy.url().should('include', '/privacy')
        cy.go('back')
    })
})