import {Given, And} from "cypress-cucumber-preprocessor/steps"


Given('Visita la URL del landing', () =>{

    // cy.visit('https://www.toctoc.com/landing/tour-virtual/')
       // cy.visit('https://www.toctoc.com/Landing/valle-grande/')
       cy.visit('https://www.toctoc.com/venta/?o=link_menu&d=todo_venta')

})

And('Verifica y Registrar el direccionamiento de los enlaces', ()=>{

    var total= 5
    var count = 0

    for (let i = 1; i < total; i++) { 
          
        cy.readFile('cypress/fixtures/enlace.json').then((data) =>{
            var dat = data[count].id
            cy.log(dat)
            var propiedad = data[count].propiedad
            var enlace=data[count].url
            //cy.log(enlace)
            
           cy.visit(enlace) 

           cy.url().then(url => {
            //cy.log(url)   
           
            if(url === enlace)
            {
                cy.writeFile('publicado.txt', '\nid: ' + dat + '  '+ propiedad, {flag: 'a+'} )
            } 
            else
            {
                cy.writeFile('despublicado.txt', '\nid: ' + dat + '  '+ propiedad, {flag: 'a+'} )
            }

          })
   
            count++ 
        
          })

        }

})