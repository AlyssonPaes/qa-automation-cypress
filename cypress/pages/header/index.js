import { elements as el} from './elements'

class Header {

    validaQueCarrinhoPossuiItens(quantidade) {

    cy.get(el.cartBadge)
        .should('be.visible')
        .and('contain.text', quantidade.toString())

    }
    
    navegarParaCarrinho() {

        cy.get(el.cartContainer).click()

    }

        validaQueCarrinhoNaoPossuiItens() {

        cy.get(el.cartBadge).should('not.exist')

}

}

export default new Header()