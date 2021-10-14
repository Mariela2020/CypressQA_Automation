import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("El usuario esta en la página de Toctoc, cierra el mensaje y hace click en botón Entrar", () => {

    cy.visit("https://www.toctoc.com/");
    cy.get('#onesignal-slidedown-cancel-button', {timeout:10000}).click()
   // cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
    cy.get('#btnLogin').click()
    cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
    cy.intercept("${ssoGatewayUrl}/**").as('sso')

})

Given("El usuario esta en la página de Toctoc en mobile", () => {

    cy.viewport('iphone-6+') 
    cy.visit("https://www.toctoc.com/");
   
})

And("Cierra el mensaje y hace click en botón Entrar", ()=> {

     cy.get('#onesignal-slidedown-cancel-button', {timeout:10000}).click()
    // cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
     cy.get('#btnLogin').click()
     cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
     cy.intercept("${ssoGatewayUrl}/**").as('sso')
})

When("Ingresa credenciales valida", (datatable) =>{
    
    datatable.hashes().forEach((element) => {
        cy.get('[id="IngresoUsuario.CorreoElectronico"]').type(element.email)
        cy.get('[id="IngresoUsuario.Contrasena"]').type(element.validopassword)
    })
    
    cy.get(':nth-child(5) > .btn').click()
    cy.wait(3000)
})

Then("El sistema valida credenciales y da la bienvenida al usuario", ()=>{

    cy.get('.nom-user').should('be.visible').and('contain','Mariela') 
})

When("Ingresa credenciales invalida", (datatable) =>{
 
    datatable.hashes().forEach((element) => {
        cy.get('[id="IngresoUsuario.CorreoElectronico"]').type(element.email)
        cy.get('[id="IngresoUsuario.Contrasena"]').type(element.invalidopassword)
    })

    cy.get(':nth-child(5) > .btn').click()  
    cy.wait(3000)            
})

Then("El sistema muestra mensaje de error", (datatable)=>{
            
    datatable.hashes().forEach((element) => {
       cy.get('.alert').contains(element.mensaje) 
    })

})

When("El usuario hace click en el Link", ()=>{

    cy.get('.link').click()
})    

And("El sistema solicita correo registrado", (datatable)=>{

    datatable.hashes().forEach((element) => {
        cy.get('#CorreoElectronico').type(element.email)
        cy.get('.btn').click()
    })
})

Then("Se envia un codigo al correo ingresado", (datatable)=>{
    
    datatable.hashes().forEach((element) => {
    cy.get('.alert-success').contains(element.mensaje) 
})

})