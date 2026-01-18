import login from "../pages/login";
import inventory from "../pages/inventory";

describe('Login',() => {

    beforeEach(() => {

        // Arrange
        login.visitarPagina()

    })

    // it é o comando pra iniciar o teste
    it('Realiar Login com sucessso', () => {

        // Act
        login.preencherCredenciaisValidas()

        // Assert
        inventory.validarAcessoAPagina()//metodo que valida que o usuário acessou a pagina   

    } )

    it('Realizar login informando credenciais inválidas', () => {

        // Act
        login.preencherCredenciaisInvalidas()   

        // Assert
        login.validarErroCredenciaisInvalidas()//metodo que valida a mensagem de erro de credenciais inválidas
        
    })

})