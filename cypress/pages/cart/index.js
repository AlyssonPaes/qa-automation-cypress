// import { elements as el } from './elements'   
class Cart {

    validarProdutoNoCarrinho(name) {
        cy.contains(name)
            .should('be.visible')

        cy.screenshot('Produto Adicionado ao carrinho')
    }

}

export default new Cart()