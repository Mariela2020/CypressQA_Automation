import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("El usuario se encuentra en la página de Retasalo", () => {

    cy.visit('https://www.retasalo.com/')
    cy.title().should('eq','TOCTOC.com - Retasalo - Tasación de propiedades')

})

When("Busca la Propiedad por Rol", (datatable) =>{
    
    cy.get(':nth-child(2) > .nav-link').click()

    datatable.hashes().forEach((element) => {

      cy.get('.selector__value-container').eq(0).click()
        .find('#react-select-4-input').first().focus()
      cy.contains(element.comuna).click({force:true})
    
      cy.get('.form-control').type(element.rol).first().focus()
      cy.wait(1000)
    //  cy.xpath('//*[@id="app"]/div/section[2]/div/div/div/form/div[2]/div/div/div').click()
      cy.contains(element.direccion).click({force:true})   

      cy.get('.resuls').should('to.visible').and('contain',element.direccion)
    
    })
     
    cy.get('.custom-control').click()
    // cy.get('.c-rol > form > .text-left > .btn').click()
    cy.get('[data-test=btn_continuar]').should('to.enabled').click()
    cy.url().should('include', 'https://sso.toctoc.com/')
    
})

And("Ingresa los credenciales de administrador", (datatable) =>{
    
    datatable.hashes().forEach((element) => {
        cy.get('#email').type(element.email)
        cy.get('#password').type(element.password, {sensitive: true})
    })
    
    cy.get('.contenido > .row > .btn').click()  
    //cy.wait(3000)

  

})

Then("El sistema valida credenciales y muestra informe", () =>{
    
    cy.get('.comreg', {timeout:10000}).should('be.visible')

    cy.get(':nth-child(1) > .accordion-feat').should('be.visible')
    cy.get(':nth-child(2) > .accordion-feat').should('be.visible')
    cy.get(':nth-child(3) > .accordion-feat').should('be.visible')
    cy.get(':nth-child(4) > .accordion-feat').should('be.visible')
    
})

And("El sistema muestra informe", () => {

    cy.get('.btn', {timeout:10000}).click()
    cy.wait(3000)
    cy.url().should('include', 'https://www.retasalo.com/informe_pagado/')

})

And("Ingresa los credenciales de usuario", (datatable) =>{
    
    datatable.hashes().forEach((element) => {
        cy.get('#email').type(element.email)
        cy.get('#password').type(element.password, {sensitive: true})
    })
    
    cy.get('.contenido > .row > .btn').click()  
   // cy.wait(3000)

})

And("El sistema muestra el informe", () => {

    cy.get('.dir', {timeout:10000}).should('be.visible') 

   // cy.get('#rut').type('267008469')
   // cy.get('.btn').click()
   // cy.wait(3000) 
    
    cy.get(':nth-child(1) > .accordion-feat > .collapse > p').should('be.visible')
    cy.get(':nth-child(2) > .accordion-feat > .collapse > p').should('be.visible')
    cy.get(':nth-child(3) > .accordion-feat > .collapse > p').should('be.visible')
    cy.get(':nth-child(4) > .accordion-feat > .collapse > p').should('be.visible')
})

And("Visualiza medio de pago disponible", () => {

    cy.get('.btn', {timeout:10000}).click()
   // cy.wait(3000)
    cy.url().should('include', 'https://ventas.toctoc.com/') 

})

