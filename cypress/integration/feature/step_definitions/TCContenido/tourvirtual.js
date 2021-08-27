import {Given, And} from "cypress-cucumber-preprocessor/steps"

Given('El usuario se encuentra en el landing TourVirtual', () =>{

  cy.visit('https://www.toctoc.com/landing/tour-virtual/')
          
})

And("Registra los precios de las Calugas", ()=>{

    var count = 0
    var total= 228   
        
    for (let i = 1; i < total; i++) { 
        count++
        const caluga = '//*[@id="listado"]/li'    
        var localizador= caluga + '['+count+']'   
        //cy.log(localizador)
            
        cy.xpath(localizador).then(function($el){
            
            var precio_caluga= $el.text().trim()
            //cy.log(precio_caluga)   
            var precio= precio_caluga.slice(0, 8) 
            //cy.log(precio)   

            cy.writeFile('precio_caluga.txt', '\nid: '+i+ ' precio: ' + precio, {flag: 'a+'} )
            
        }) 

        }
  
})
