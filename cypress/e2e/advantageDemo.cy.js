import cadastro from "../../page/cadastro"
import CadastroFactory from "../factories/CadastroFactory"
import LoginFactory from "../factories/LoginFactory"

describe('Validar página inicial', () => {

    it('Validar acesso ao site', () => {

        cadastro.start()
    })
    it('Validar header do site', () => {

        cadastro.start()
        cadastro.title()
    })

    it('Validar ícones de redes sociais no roda pé', () => {

        cadastro.start()
        cadastro.redessociais()
    })
    it('Validar campo contact us', () => {

        cadastro.start()
        cadastro.contact()
    })
    it('Validar box contact with us', () => {

        cadastro.start()
        cadastro.contactbox()
    })


})

describe('Validação de cadastro de usuário', () => {

    it('Validar cadastro de usuário com sucesso', function ()  {

        var usuario = CadastroFactory.usuario()

        cadastro.start()
        cadastro.cadastro(usuario)
    })
    it('Validar cadastro de usuário com Username existente', function ()  {

        var usuario = CadastroFactory.usuario()

        usuario.username = 'EwertonAlex'

        cadastro.start()
        cadastro.cadastroInv(usuario)
        cadastro.alertError('User name already exists')
    })
    it('Validar cadastro de usuário com Username vazio', function ()  {

        var usuario = CadastroFactory.usuario()

        usuario.username = ' '

        cadastro.start()
        cadastro.cadastroInv(usuario)
        cadastro.alertError('Registration failed. Please try again.')
    })
    it('Validar cadastro de usuário com Username inválido', function ()  {

        var usuario = CadastroFactory.usuario()

        usuario.username = '1'

        cadastro.start()
        cadastro.cadastroInv(usuario)
        cadastro.alertError('Incorrect user name or password.')
    })
})

describe('Validação de login', () => {

    it('Validar login com sucesso', function ()  {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.login(login)
    })
    it('Validar login com dados inválidos', function ()  {

        var login = LoginFactory.login()

        cadastro.start()
        cadastro.login(login)
        cadastro.alertMessageShouldBe('Incorrect user name or password.') //Validar alerta de erro
    })
    it('Validar login com Facebook', function ()  {

        cadastro.start()
        cadastro.FaceLogin()
        cadastro.alertMessageShouldBe('403 FORBIDDEN Sorry, connecting to Facebook is currently unavailable. Please try again later.') //Validar alerta de erro
    })



})

describe('Validação de carrinho', () => {

    it('Validar adicionar produto no carrinho', function ()  {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.carrinho(login)
    })
    it('Validar que existe produto no carrinho', function ()  {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.ProdCarrinho(login)
    })
    it('Validar exlcuir produto do carrinho', function ()  {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.ExcluirProd(login)
        cadastro.alertExcluirProd('Your shopping cart is empty')
    })
    it('Validar editar quantidade de produto no carrinho', function ()  {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.QuantProduto(login)
    })
    it('Validar editar cor de produto no carrinho', function ()  {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.EditarProduto(login)
    })
    it('Validar adicionar produto no carrinho sem login', function ()  {

        cadastro.start()
        cadastro.ProdSemLogin()
    })


})

describe('Validação de Produtos', () => {
    xit('Validar busca por produto válido', function () {

        cadastro.start()
        cadastro.buscarProd()
    })
    xit('Validar busca por produto inexistente', function () {

        cadastro.start()
        cadastro.buscarProdInv()
        cadastro.alertErrorProd('No results for "Camisa do Vasco"')
    })
    it('Validar busca por filtro de produto', function () {

        cadastro.start()
        cadastro.FiltraProd()
    })

})

describe('Validação Dados da conta', () => {
    xit('Validar editar da conta', function () {

        var login = LoginFactory.login()

        login.username = 'EwertonAlex'
        login.password = 'Teste@123'

        cadastro.start()
        cadastro.login(login)

        var edit = CadastroFactory.usuario()
        cadastro.EditarConta(edit)

    })


})

// describe('Slider', () => {

//     it("Changing slider", () => {
//         cy.visit('/');
//         cy.get('#headphonesImg').click()
//         cy.get('#accordionPrice').click()


//         cy.get('.noUi-handle-lower')
//              .trigger("mousedown"); 
//         cy.get('.noUi-handle-upper')
//              .trigger("mousemove")            
//     })
//   })