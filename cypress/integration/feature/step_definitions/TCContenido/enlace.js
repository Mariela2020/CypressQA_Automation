import {Given, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')  

Given('Visita la URL del landing', () =>{

  //cy.visit('https://www.toctoc.com/landing/especial-extranjeros/')  
  // cy.visit('https://www.toctoc.com/Landing/venta-usados/')
   cy.visit('https://www.toctoc.com/Landing/valle-grande/')
  //cy.visit('https://www.toctoc.com/landing/tour-virtual/')
  // cy.visit('https://www.toctoc.com/venta/?o=link_menu&d=todo_venta')
          
})

And("Registra los enlaces de las propiedades", ()=>{

    var count = 0   
    cy.get("a").each($a => {
        count++
        const url = $a.attr("href")
        cy.writeFile('enlace.txt', '\nid: '+ count + ' '+url, {flag: 'a+'} )

    })     
})

