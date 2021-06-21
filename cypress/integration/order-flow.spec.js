describe('Order product flow', () => {
    before(() => {
        //Clear session first
        cy.clearCookies()
    })

    it('Show quotes', () => {
        //ARRANGE
        cy.visit('/en/product/health-insurance/questions')

        // ACT
        cy.get('label[for="product_category-ipdOpd"]').click()
        cy.get('label[for="product_ipdopd_subcategory-student"]').click()
        cy.get('input[name="customer_phone"]').clear().type("0999999999").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('input[name="customer_first_name"]').clear().type("Test").blur()
        cy.get('input[name="customer_last_name"]').clear().type("Test").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('input[name="customer_email"]').clear().type("Test@email.com").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('label[for="customer_gender-F"]').click()
        cy.get('input[name="customer_dob"]').clear().type("11-11-1990").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('label[for="tc-1"]').click()
        cy.get('#btn-marketing-consent').click()

        // ASSERT
        cy.url().should('include', '/en/product/health-insurance/quotes')
        cy.get('.SortFilter_sort-filter__OsVF-').within(() => {
            cy.get('strong').should('have.text', "IPD/OPD")
        })
    })



    it('Apply filter', () => {
        //ARRANGE
        cy.visit('/en/product/health-insurance/quotes')

        //ACT
        cy.get('.SearchCard_search-card__main-container__WeUcN').within(() => {
            cy.get('#health-category').select('Specific Disease')
            cy.get('select').eq(1).select('Cancer')
            cy.get('button').click()
            cy.wait(4000)
        })

        //ASSERT 
        cy.get('.SortFilter_sort-filter__OsVF-').within(() => {
            cy.get('strong').should('have.text', "Specific Disease")

        })
    })

    it('Input confirmation data', () => {
        //ARRANGE
        cy.visit('/en/product/health-insurance/quotes')

        //ACT
        cy.get(".SummaryCard_summary-card__3Tfdt").eq(0).within(() => {
            cy.get('button').contains('BUY NOW').click()
        })
        
        cy.get('input[name="customer_first_name"]').clear().type("Test").blur()
        cy.getIframeBody().find('div[aria-label="ปิด"]').click()
        cy.get('input[name="customer_last_name"]').clear().type("Test").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('input[name="customer_phone"]').clear().type("0999999999").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('input[name="customer_email"]').clear().type("Test@email.com").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('label[for="customer_nationality-foreigner"]').click()
        cy.get('input[name="customer_passport"]').clear().type("AA1234567").blur()
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('input[name="customer_address"]').clear().type('test').blur()
        cy.get('select[name="customer_province"]').select('Kalasin')
        cy.get('select[name="customer_district"]').select('Sam Chai')
        cy.get('select[name="customer_subdistrict"]').select('Samran')
        cy.get('select[name="customer_postcode"]').select('46180')
        cy.get('button[style="display: block;"]').eq(0).click()
        cy.get('label[for="customer_billing_same-1"]').click()
        cy.get('label[for="customer_shipping_same-1"]').click()
        cy.get("#customer_health").within(() => {
            cy.get('button').contains('Confirm').click()
        })

        //ASSERT
        cy.get(".SummaryCard_summary-card__wsKSA").within(() => {
            cy.get('button').should('be.visible')
            cy.get('button').should('not.be.disabled')
        })
    })
})




