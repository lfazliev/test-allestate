describe('headerMob', () => {
    it('transition', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })

        cy.get('footer').find('a[href="/krasnodar/adverts/living/rent"]').click()
        cy.url().should('include', '/adverts/living/rent')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flat"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flat')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb#adverts')

        cy.get('footer').find('a[href="/mortgage/all_programs"]').click()
        cy.url().should('include', '/mortgage/all_programs')

        cy.get('footer').find('a[href="/terms_of_use"]').click()
        cy.url().should('include', '/terms_of_use')

        cy.get('footer').find('a[href="/news"]').click()
        cy.url().should('include', '/news')

        cy.get('footer').find('a[href="/privacy"]').click()
        cy.url().should('include', '/privacy')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb/rms_apartment#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb/rms_apartment#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb/rms_1#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb/rms_1#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb/rms_2#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb/rms_2#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb/rms_3#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb/rms_3#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb/rms_4#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb/rms_4#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flatnb/rms_5+#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flatnb/rms_5+#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flat/rms_1#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flat/rms_1#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_room#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_room#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_flat/rms_apartment#adverts"]').click()
        cy.url().should('include', '/adverts/buy/living/ot_flat/rms_apartment#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/buy/living/ot_cottage#adverts"]').contains('Дома').click()
        cy.url().should('include', '/adverts/buy/living/ot_cottage#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/rent/living/ot_flat/rms_1#adverts"]').click()
        cy.url().should('include', '/adverts/rent/living/ot_flat/rms_1#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/rent/living/ot_room#adverts"]').click()
        cy.url().should('include', '/adverts/rent/living/ot_room#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/rent/living/ot_flat/rms_apartment#adverts"]').click()
        cy.url().should('include', '/adverts/rent/living/ot_flat/rms_apartment#adverts')

        cy.get('footer').find('a[href="/krasnodar/adverts/rent/living/ot_cottage#adverts"]').contains('Дома').click()
        cy.url().should('include', '/adverts/rent/living/ot_cottage#adverts')

    })
})