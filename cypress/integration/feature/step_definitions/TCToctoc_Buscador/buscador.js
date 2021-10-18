import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("El usuario esta en Toctoc", () => {

    cy.visit("https://www.toctoc.com/");
    //cy.get('#onesignal-slidedown-cancel-button').click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
})

Given("El usuario esta en Toctoc en mobile", () => {

   
    cy.viewport('iphone-6+')
    cy.visit("https://www.toctoc.com/");
    //cy.get('#onesignal-slidedown-cancel-button').click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
})
     
When("El usuario hace click en el Boton Comprar", () =>{
   
    //cy.get('#tipoBusca > :nth-child(1)').click()
    cy.get('.active').click()
})

And("Ingresa una comuna o region de interes", (datatable) =>{

    datatable.hashes().forEach((element) => {
        cy.get('#boxBuscador > .form-control').type(element.region)
    })
    cy.get(':nth-child(2) > .form-row > .col-sm-3 > #btnBusca', {timeout:5000}).click()   
    
})

And("El sistema muestra las propiedades en Venta", ()=>{
 
    cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .region', {timeout:10000}).should('be.visible')
    cy.wait(3000)
    //cy.get(':nth-child(1) > .lnk-info > .c-infores > .info-body > .region', {timeout:10000}).should('be.visible')
})

And("El sistema muestra las propiedades en Venta en mobile", ()=>{
 
    cy.get('.btn-group > :nth-child(1)').click()
  //  cy.get('.lnk-info', {timeout:10000}).should('be.visible')  

})

Then("Selecciona la primera propiedad en Venta", ()=>{
 
    cy.get('.lnk-info', {timeout:10000}).should('be.visible')
    cy.get('.lnk-info').invoke('removeAttr', 'target').first().click({force:true})
})

Then("Selecciona la primera propiedad en Venta en mobile", ()=>{
 
    //cy.get('.lnk-info', {timeout:10000}).should('be.visible')
    cy.get('.lnk-info', {timeout:10000}).should('be.visible').invoke('removeAttr', 'target').first().click({force:true})

})

When("El usuario hace click en el Boton Arrendar", () =>{
    
    cy.get('#tipoBusca > :nth-child(2)').click()
})

And("Ingresa una comuna de interes", (datatable) =>{

    datatable.hashes().forEach((element) => {
        cy.get('#boxBuscador > .form-control').type(element.comuna)
    })
    cy.xpath('/html/body/div[3]/section[1]/div/div/div[1]/div[2]/div/div[2]/form/div/div/div[1]/span').click() 
})

And("Ingresa una comuna de interes en mobile", (datatable) =>{

    datatable.hashes().forEach((element) => {
        cy.get('#boxBuscador > .form-control').type(element.comuna)
    })
    cy.get(':nth-child(2) > .form-row > .col-sm-3 > #btnBusca').click() 
})

And("El sistema muestra las propiedades en Arriendo", ()=>{
 
    cy.get(':nth-child(2) > .lnk-info > .c-infores > .info-body > .region', {timeout:10000}).should('be.visible').and('contain','Santiago')
})

And("El sistema muestra las propiedades en Arriendo en mobile", ()=>{
 
    cy.get('.btn-group > :nth-child(1)', {timeout:10000}).should('be.visible').click()
})

Then("Selecciona la primera propiedad en Arriendo", ()=>{
 
    cy.get('.lnk-info', {timeout:10000}).invoke('removeAttr', 'target').first().click({force:true})
})

When("Inicia sesion con credenciales valida", () =>{

    cy.get('#onesignal-slidedown-cancel-button', {timeout:10000}).click()
    cy.get('#btnLogin').click()
    cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('mariela.hurtado@toctoc.com')
    cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba',{sensitive: true})
    cy.get(':nth-child(5) > .btn').click()
    cy.wait(2000)
    cy.get('.nom-user').should('be.visible').and('contain','Mariela') 
})

And("El usuario hace click en el Link Buscar por codigo", ()=>{

    cy.get('#btnBuscaxcod').click()
})

And("Ingresa el codigo de la propiedad", (datatable) =>{

    datatable.hashes().forEach((element) => {
        cy.get('#cBuscaXcod > .c-buscadatos > .form-row > .col-sm-9 > .form-control')
        cy.get('#cBuscaXcod > .c-buscadatos > .form-row > .col-sm-9 > .form-control').type(element.codigo)
    })
    cy.get('#cBuscaXcod > .c-buscadatos > .form-row > .col-sm-3 > #btnBusca').click()
})
     
And("El sistema muestra la ficha propiedad", ()=> {

    cy.get('.tt-ficha', {timeout:10000}).should('be.visible')
})

Then("El usuario cotiza una planta de interes", ()=> {

   // cy.get('.btn-cotiza-nuevo').click()

   cy.get(':nth-child(2) > :nth-child(3) > .btn-cotiza-nuevo').click({force:true})


   //cy.get('.cf-cta > .btn').click()
   // cy.get('.c-btns > .btn-success').click()
   // cy.get('.modal-header').should('be.visible')
})
