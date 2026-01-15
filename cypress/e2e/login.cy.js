describe('Login',() => {
    // it é o comando pra iniciar o teste
    it('Realiar Login com sucessso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        // Assert

        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    } )

    it.only('Realizar login informando credenciais inválidas', () => {

        // Arrange
        cy.visit('https://www.saucedemo.com/')

        // Act
        cy.get('[data-test="username"]').type('user_invalid')

        cy.get('[data-test="password"]').type('senha_invalid')

        cy.get('[data-test="login-button"]').click()

        // Assert
        cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')

        cy.url().should('eq','https://www.saucedemo.com/')
        
    })

})