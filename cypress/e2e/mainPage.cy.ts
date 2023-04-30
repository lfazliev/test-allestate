import { includes } from "cypress/types/lodash"

describe('mainPage', () => {
    it('testSection', () => {
        cy.visit('/krasnodar')
        cy.intercept('https://mc.yandex.md/**', { log: false })
        cy.intercept('https://mc.yandex.ru/**', { log: false })
        cy.get('div.mortgageSection').as('mortgageSection')
        cy.get('div.mortgageSection').find('a').each(($el, i: number) => {
            cy.get('@mortgageSection').find('a').eq(i).then((el) => {
                const href = el.attr('href')
                if (!href.includes('https://')) {
                    cy.wrap(el).click()
                    cy.url().should('include', href)
                    cy.go('back')
                }
            })

        })

        cy.get('div.popularBlock').as('popularBlock')
        cy.get('div.popularBlock').find('a').each(($el, i: number) => {
            cy.get('@popularBlock').find('a').eq(i).then((el) => {
                const href = el.attr('href')
                if (!href.includes('https://')) {
                    cy.wrap(el).click()
                    cy.url().should('include', href)
                    cy.go('back')
                }
            })
        })
        cy.get('div.newsSection').as('newsSection')
        cy.get('div.newsSection').find('a').each(($el, i: number) => {
            cy.get('@newsSection').find('a').eq(i).then((el) => {
                const href = el.attr('href')
                if (!href.includes('https://')) {
                    if (el.is(':visible')) {
                        cy.wrap(el).click('center')
                        cy.url().should('include', href)
                        cy.go('back')
                    }
                }
            })

        })
        cy.get("div.findRieltor").find('button.mainButton').click()
        cy.get('div.v-overlay__content').find('div.popupModal').contains('В каком городе?').siblings('div').find('input').invoke('val', '')
        cy.get('div.v-overlay__content').find('div.popupModal').find('input').each((el, i: number) => {
            cy.wrap(el).type('1')
            cy.wrap(el).should('have.value', '1')
        })
        cy.get('div.v-overlay__content').find('div.popupModal').find('textarea').then((el) => {
            cy.wrap(el).type('1')
            cy.wrap(el).should('have.value', '1')
        })
        cy.get('div.v-overlay__content').find('div.popupModal').find('a[href="/privacy"]').click()
        cy.url().should('include', '/privacy')
        cy.go('back')

        cy.get('div.swiper').eq(0).scrollIntoView()
        cy.contains("Свежие предложения").parent().siblings('div').as('ads')
        cy.get('@ads').find('div.swiper-button-disabled').should('exist')
        cy.get('@ads').find('div.swiper-button-next').click()
        cy.get('@ads').find('div.swiper-button-disabled').should('not.exist')
        cy.get('@ads').find('div.swiper-button-prev').should('exist')

        cy.get('div.swiper').eq(1).scrollIntoView()
        cy.contains("Топ риелторы вашего региона").parent().siblings('div').as('ads')
        cy.get('@ads').find('div.swiper-button-disabled').should('exist')
        cy.get('@ads').find('div.swiper-button-next').click()
        cy.get('@ads').find('div.swiper-button-disabled').should('not.exist')
        cy.get('@ads').find('div.swiper-button-prev').should('exist')
        cy.get('a[href="/krasnodar/rieltors"]').eq(1).click()
        cy.url().should('includes', '/rieltors')
        cy.go('back')


    })
})