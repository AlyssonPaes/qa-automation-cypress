describe('Hooks', () => {
    before(() => {
        cy.log('Executa somente antes de todos os testes')

    })

    beforeEach(() => {
        cy.log('Executa antes de cada teste')

    })


    // Esses dois o cypress não recomenda usar para evitar problemas durante os testes
    afterEach (() =>{
        cy.log('Executa depois de cada teste')

    })
    
    // Esses dois o cypress não recomenda usar para evitar problemas durante os testes
    after(() => {
        cy.log('Executa somente depois de todos os testes')

    })

    it('Test 1', () => {
        cy.log('Executando o Teste 1')
    })

    it('Test 2', () => {
        cy.log('Executando o Teste 2')
    })

    it('Test 3', () => {
        cy.log('Executando o Teste 3')
    })
})