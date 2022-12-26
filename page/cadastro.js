

class CadastroAdvantage {

    start(){
        cy.visit('/')
    }
    title()  {
        cy.get('.logo a[href="#/"]').should('be.visible')
        cy.get('a[translate="SPACIAL_OFFER"]').click()
        cy.get('a[translate="POPULAR_ITEMS"]').click()
        cy.get('a[translate="CONTACT_US"]').click()
        cy.get('a[translate="OUR_PRODUCTS"]').click()
    }
    redessociais()  {
        cy.get('img[name="follow_facebook"]').should('be.visible')
        cy.get('img[name="follow_twitter"]').should('be.visible')
        cy.get('img[name="follow_linkedin"]').should('be.visible')
    }
    
    contact() {
        cy.get('select[name="categoryListboxContactUs"]').select('Laptops')
        cy.get('select[name="productListboxContactUs"]').select('HP Spectre x360 - 13-4102dx')
        cy.get('input[name="emailContactUs"]').type('email@teste.com')
        cy.get('textarea[name="subjectTextareaContactUs"]').type('Meu nome é Ewerton, preciso de ajuda com meu pedido. Pode me ajudar?')
        cy.get('#send_btnundefined').click()
        cy.get('.successMessage').should('be.visible')
        cy.get('img[name="go_up_btn"]').click()
    }

    contactbox()  {
        cy.get('#chatLogo').should('be.visible')
        cy.visit('http://advantageonlineshopping.com/chat.html')
        cy.get('#textMessage').type('Olá, bom dia! Meu nome é Ewerton, preciso de ajuda com meu pedido. Pode me ajudar?')
        cy.get('#btnSender').click()
        
    }

    cadastro(usuario) {
        cy.get('#menuUserSVGPath').click()
        cy.get('.create-new-account').click()
        cy.get('input[name="usernameRegisterPage"]').type(usuario.username)
        cy.get('input[name="emailRegisterPage"]').type(usuario.email)
        cy.get('input[name="passwordRegisterPage"]').type(usuario.password)
        cy.get('[a-hint="Confirm password"]').type(usuario.confpassword)
        cy.get('input[name="first_nameRegisterPage"]').type(usuario.firstname)
        cy.get('input[name="last_nameRegisterPage"]').type(usuario.lastname)
        cy.get('input[name="phone_numberRegisterPage"]').type(usuario.phone)
        cy.get('select[name="countryListboxRegisterPage"]').select(usuario.country)
        cy.get('input[name="cityRegisterPage"]').type(usuario.city)
        cy.get('input[name="addressRegisterPage"]').type(usuario.address)
        cy.get('[sec-name="userState"]').type(usuario.state)
        cy.get('input[name="postal_codeRegisterPage"]').type(usuario.postalcode)
        cy.get('input[name="i_agree"]').check()
        cy.get('#register_btnundefined').click()
    }
    cadastroInv(usuario) {
        cy.get('#menuUserSVGPath').click()
        cy.get('.create-new-account').click()
        cy.get('input[name="usernameRegisterPage"]').type(usuario.username)
        cy.get('input[name="emailRegisterPage"]').type(usuario.email)
        cy.get('input[name="passwordRegisterPage"]').type(usuario.password)
        cy.get('[a-hint="Confirm password"]').type(usuario.confpassword)
        cy.get('input[name="i_agree"]').check()
        cy.get('#register_btnundefined').click()
        
    }      
    alertError(expectedMessage) {
        cy.contains('.invalid', expectedMessage).should('be.visible')
    }
    
    login(login){
        cy.get('#menuUserSVGPath').click()
        cy.get('input[name="username"]').type(login.username)
        cy.get('input[name="password"]').type(login.password)
        cy.get('#sign_in_btnundefined').click()
        cy.get('#signInResultMessage')
    }

    FaceLogin() {
        cy.get('#menuUserSVGPath').click()
        cy.get('.facebook').click()
    }
    alertMessageShouldBe(expectedMessage) {
        cy.contains('#signInResultMessage', expectedMessage).should('be.visible')
    }
    buscarProd(){
        
        cy.get('#search').click()
        cy.wait(5000)
        cy.get('#autoComplete').click()
        cy.get('#autoComplete').type('LOGITECH G502 PROTEUS CORE{enter}')
        cy.wait(3000)
        //cy.get('.product').click()
        cy.wait(3000)
        
    }
    buscarProdInv(){
        
        cy.get('#search').click()
        cy.wait(5000)
        cy.get('#autoComplete').click()
        cy.get('#autoComplete').type('Camisa do Vasco{enter}')
        cy.wait(2000)       
    }
    alertErrorProd(expectedMessage) {
        cy.contains('.noProducts', expectedMessage).should('be.visible')
    }
    carrinho(login){
        cy.get('#menuUserSVGPath').click()
        cy.get('input[name="username"]').type(login.username)
        cy.get('input[name="password"]').type(login.password)
        cy.get('#sign_in_btnundefined').click()
        cy.get('#tabletsImg').click()
        cy.get('#17').click()
        cy.get('button[name="save_to_cart"]').click()
    }
    ProdSemLogin(){
        
        cy.get('#tabletsImg').click()
        cy.get('#17').click()
        cy.get('button[name="save_to_cart"]').click()
    }
    ProdCarrinho(login){
        cy.get('#menuUserSVGPath').click()
        cy.get('input[name="username"]').type(login.username)
        cy.get('input[name="password"]').type(login.password)
        cy.get('#sign_in_btnundefined').click()
        cy.get('#shoppingCartLink .cart').should('be.visible')
    }
    ExcluirProd(login){
        cy.get('#menuUserSVGPath').click()
        cy.get('input[name="username"]').type(login.username)
        cy.get('input[name="password"]').type(login.password)
        cy.get('#sign_in_btnundefined').click()
        cy.get('#tabletsImg').click()
        cy.get('#17').click()
        cy.get('button[name="save_to_cart"]').click()
        cy.wait(3000)
        cy.get('#shoppingCartLink').click()
        cy.get('.sp').click()
        cy.wait(5000)
        cy.get('.remove').click()
    }
    alertExcluirProd(expectedMessage) {
        cy.contains('.bigEmptyCart', expectedMessage).should('be.visible')
    }
    QuantProduto(login){
        cy.get('#menuUserSVGPath').click()
        cy.get('input[name="username"]').type(login.username)
        cy.get('input[name="password"]').type(login.password)
        cy.get('#sign_in_btnundefined').click()
        cy.get('#tabletsImg').click()
        cy.get('#17').click()
        cy.get('button[name="save_to_cart"]').click()
        cy.wait(5000)
        cy.get('#shoppingCartLink .cart').click()
        cy.get('.sp').click()
        cy.wait(5000)
        cy.get('.edit').click()
        cy.wait(5000)        
        cy.get('.plus').click()
        cy.get('button[name="save_to_cart"]').click()
    }
    EditarProduto(login){
        cy.get('#menuUserSVGPath').click()
        cy.get('input[name="username"]').type(login.username)
        cy.get('input[name="password"]').type(login.password)
        cy.get('#sign_in_btnundefined').click()
        cy.wait(5000)
        cy.get('#shoppingCartLink .cart').click()
        cy.wait(5000)
        cy.get('.edit').click()
        cy.get('.GRAY').click()        
        cy.get('button[name="save_to_cart"]').click()
        cy.get('#shoppingCartLink .cart').click()
        cy.wait(5000)
        cy.get('.remove').click()
     }
     FiltraProd(){

        
        cy.get('#headphonesImg').click()
        cy.get('#accordionPrice').click()


        cy.get('.noUi-handle-lower')
             .trigger("mousedown"); 
        cy.get('.noUi-handle-upper')
             .trigger("mousemove")
        
        
        cy.get('#accordionAttrib0').click()
        cy.get('input[name="compatibility_0"]').check()
        cy.get('#accordionAttrib1').click()
        cy.get('input[name="connector_1"]').check()
        cy.get('#accordionAttrib2').click()
        cy.get('#weight_2').check()
        cy.get('#weight_3').check()
        cy.get('#accordionColor').click()
        cy.get('#productsColors3683D1').click()
        cy.get('#productsColors414141').click()  
    }
    EditarConta(usuario){
        
        cy.get('#menuUserLink').click()
        cy.get('#loginMiniTitle label[translate="My_account"]').click()
        cy.get(':nth-child(1) > .blueLink > .floatRigth').click()
        cy.get('input[name="first_nameAccountDetails"]')
            .clear()
            .type(usuario.firstname)
        cy.get('input[name="last_nameAccountDetails"]')
            .clear()
            .type(usuario.lastname)
        cy.get('input[name="phone_numberAccountDetails"]')
            .clear()
            .type(usuario.phone)
        cy.get('input[name="cityAccountDetails"]')
            .clear()
            .type(usuario.city)
    }


}

export default new CadastroAdvantage;