import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('El usuario se encuentra en la pagina Toctoc', () =>{
    cy.visit('https://www.toctoc.com/')
    cy.get('#onesignal-slidedown-cancel-button', {timeout:10000}).click()
    cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 

  })

Given('El usuario se encuentra en la pagina Toctoc mobile', () =>{
 
  cy.viewport('iphone-6')  
  cy.visit('https://www.toctoc.com/')
  cy.get('#onesignal-slidedown-cancel-button', {timeout:10000}).click()
  cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 

})

  And('Hace click sobre el Menu Principal Inmobiliaria - Catalogo de Inmobiliarias',()=>{
    
    cy.get(':nth-child(3) > .dropdown', {timeout:3000}).click()
   // cy.xpath('//strong[contains(text(),"Catálogo de Inmobiliarias")]').click()
    // cy.xpath('//*[@id="menuscroll"]/li[3]/div/div[1]/ul/li[11]/a/strong', {timeout:10000}).click()
    cy.contains('Catálogo de Inmobiliarias').click()
    cy.get('.tt').should('be.visible').and('contain','Inmobiliarias')

  });

  And('Hace click sobre el Menu Principal Inmobiliaria', ()=>{
    
    cy.get('#btnCierraMenu', {timeout:3000}).click()
    cy.get(':nth-child(3) > .dropdown', {timeout:3000}).click()
    cy.contains('Catálogo de Inmobiliarias').click()
    cy.get('.tt').should('be.visible').and('contain','Inmobiliarias')

  });

  And('Busca Inmobiliaria por nombre y hace click al boton buscar',()=>{
    cy.get('#searchBoxInput').type('Almagro')
    cy.get('#btnBusca').click()
      
    //var newUrl = 'https://www.toctoc.com/inmobiliarias/propiedadesInmobiliaria/192/Actual/';
    var newUrl = 'https://www.toctoc.com/inmobiliarias/propiedadesInmobiliaria/1/Almagro/'
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen').callsFake(url => {
        newUrl = url
      })
    })

    cy.get('.sld-item', {timeout:5000}).eq(-10).click({force:true})
    cy.get('@windowOpen').should('be.called');
    cy.visit(newUrl)

  })

  When('Visualiza las propiedades de la Inmobiliaria',()=>{

    cy.get('.tt').should('be.visible').and('contain','Almagro')
  })

  Then('Selecciona el primer proyecto', ()=>{

    cy.get('.lnk-info').invoke('removeAttr', 'target').first().click()
    
  })