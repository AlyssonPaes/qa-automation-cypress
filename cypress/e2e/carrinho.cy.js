import login from '../pages/login'
import inventory from '../pages/inventory'
import header from '../pages/header'
import cart from '../pages/cart'

describe('Carrinho', () => {

    beforeEach(() => {

        // Arrange
        login.visitarPagina() //metodo que visita a pagina de login
        login.preencherCredenciaisValidas() //metodo que faz login com um usuário valido (sem erros)

    })

    it('Adicionar produto ao carrinho com sucesso', () => {//Teste para adicionar um produto ao carrinho e validar que ele foi adicionado

        // Act
        const qtdItensAdicionados = 1
        inventory.adicionarProduto('Sauce Labs Backpack') //metodo que adiciona o produto ao carrinho


        // Assert
        header.validaQueCarrinhoPossuiItens(qtdItensAdicionados)//metodo que valida que o carrinho possui 1 item
        header.navegarParaCarrinho()//metodo que navega para o carrinho

        cart.validarProdutoNoCarrinho('Sauce Labs Backpack')//metodo que valida que o produto com esse nome está no carrinho

    })

    it('Remover produto do carrinho com sucesso', () => { //Teste para remover um produto do carrinho e validar que ele foi removido

        inventory.adicionarProduto('Sauce Labs Backpack')

        // Act
        inventory.removerProduto('Sauce Labs Backpack')//metodo que remove o produto do carrinho

        // Assert
        header.validaQueCarrinhoNaoPossuiItens()

        cy.screenshot('Produto Removido do carrinho')

    })

    
})