describe('headerMob', () => {
    it('transition', () => {
        cy.viewport(1300, 1000)
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })


        cy.get('header').find('a[href="/krasnodar/adverts/rent"]')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/adverts/rent')


        cy.get('header').contains('Продажа')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/adverts/buy')


        cy.get('header').find('a[href="/mortgage/all_programs"]')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/mortgage/all_programs')


        cy.get('header').contains('Риелторы')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/rieltors')


        cy.get('header').find('a[href="/news"]')
            .click({ scrollBehavior: false })
        cy.url().should('include', '/news')

        cy.get('a[href="/lk/favourites"]').click()
        cy.url().should('include', '/lk/favourites')

        cy.get('div.icons').find('a[href="/lk/comparisons"]').click()
        cy.url().should('include', '/lk/comparisons')

        cy.get('div.icons').find('a[href="/lk/messages"]').click()
        cy.url().should('include', '/lk/messages')

        cy.get('div.icons').find('a[href="/lk/notifications"]').click()
        cy.url().should('include', '/lk/notifications')
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