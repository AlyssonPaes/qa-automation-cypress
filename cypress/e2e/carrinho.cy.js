describe('Carrinho', () => {

    beforeEach(() => {

        // Arrange

        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

    })

    it('Adicionar produto ao carrinho com sucesso', () => {

        // Act

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('contain.text','1')

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.screenshot('Produto Adicionado ao carrinho')

        // Assert

        cy.url().should('eq','https://www.saucedemo.com/cart.html')

        cy.get('[data-test="inventory-item-name"]')
        .should('be.visible')
        .and('contain.text','Sauce Labs Backpack')

    })

    it('Remover produto do carrinho com sucesso', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('contain.text','1')

        // Act

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        cy.screenshot('Produto Removido do carrinho')

    })

    
})