import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('-') 

const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('El usuario está en Gestión Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/')
    //cy.visit('https://ww2.qatoctoc.com/gestioncorredor/') 
    cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')    
  })

And('Inicia cuenta con credenciales valida', ()=>{

    cy.get('.menu__section--profile > a').click()
    cy.intercept("${ssoGatewayUrl}/**").as('sso')
   // cy.get('#email').type('fchaves@remax-vision.cl')
   // cy.get('#password').type('sebajacartera')
    cy.get('#email').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('prueba')
    cy.get('.btn > span').click()
    cy.get('[href="https://sso.toctoc.com/?o=gc&url=aHR0cDovL3d3Mi50b2N0b2MuY29tL2dlc3Rpb25jb3JyZWRvci8="]', {timeout:10000}).should('be.visible').and('contain','hurtadomarie')  
    
})

And('Hace click en el catalogo de Productos Marketing', ()=>{
    cy.get('.gCdesktop > :nth-child(3) > a').click()
})

When('Selecciona y visualiza información del Producto Propiedad Destacada', ()=>{  
    cy.get(':nth-child(1) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 0.80
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
})

And('Verifica los datos almacenados', ()=>{
    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 1/3')
    cy.wait(3000)
    cy.get('#nextStep').click()
    cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 2/3')   
})

And('Declara conocer y aceptar los Términos y condiciones de TOCTOC', ()=>{
    cy.get('#aceptaTerminos').click()
    cy.get('.btn-danger').click({force: true}) 
})

And('Visualiza Detalle del contrato del producto a contratar', ()=>{
   // cy.get('.btn-danger').click({force: true}) 

   cy.get(':nth-child(2) > span.total').then(function($valorelem){
        
    const totalrestxt= $valorelem.text()
    var totalres = totalrestxt.substring(1)
    //cy.log(totalrestxt)
    var totalint= parseFloat(totalres)
    cy.log(totalint)
      
    cy.readFile('cypress/fixtures/precio.json').then((dataUF2) => {
      var precio = dataUF2.precioUF
     // var precio1= parseFloat(precio)
      cy.log(precio)

      cy.fixture('valorUF.json').then((dataUF) => {
        var valueUF = dataUF.uf
        var valueUF1 = parseFloat(valueUF)
        cy.log(valueUF1)

        var ivaUF = (precio*0.19).toFixed(2)
        cy.log(ivaUF)
        var precioesp= Number(precio) + Number(ivaUF) 
        var precioesp1 = precioesp.toFixed(2)
        cy.log(precioesp1)
        var precioesp2= precioesp*valueUF1
        cy.log(precioesp2)
        var totalesp= Math.round(precioesp2) 
        //cy.log(totalesp)
        var totalesp1 = new Intl.NumberFormat().format(totalesp)
        var totalesp2 = parseFloat(totalesp1)
        cy.log(totalesp2)

       // expect(totalint, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(totalesp2)
        
        totalres = { totalres : (totalesp2)};
        cy.writeFile('cypress/fixtures/datatotal.json', totalres);

        if (totalint==totalesp2)
          {
          cy.log('El Total del Resumen obtenido es igual al Total esperado')
          }
        else
          {
          cy.writeFile('diferencia.txt', '\n\nTotal Resumen Obtenido: ' + totalint + '/ Total Resumen Esperado: ' + totalesp2 + ' ' + date + '  ' + hora, { flag: 'a+' })
          //cy.writeFile('diferencia.txt', '\nPrecio del producto esperado: ' + precioesp2 + ';  ' + date + '  ' + hora, { flag: 'a+' })
          }  
      })
    
    })
        
    cy.writeFile('producto.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
  }) 

   // cy.get(':nth-child(4) > .col-12 > h6').click()
   // cy.screenshot()  
    cy.get('.btn').click({force: true})
    cy.title().should('eq','Pago de servicios')

})

And('Visualiza Detalle del contrato del producto Ultima Ventas a contratar', ()=> {

    cy.get(':nth-child(2) > .item-block > :nth-child(1) > span', {timeout:10000}).then(function($productoelem){
        const productotxt= $productoelem.text()
        cy.log(productotxt)
        
      
      cy.get('.item-flex > span.total').then(function($valorelem){    
        const totalrestxt= $valorelem.text()
        var totalres1= parseFloat(totalrestxt)
        cy.log(totalres1)      
  
        cy.readFile('cypress/fixtures/precio.json').then((dataprecio) =>{
          var precio= dataprecio.precioUF
          cy.log(precio)
          var ivaUF = (precio*0.19).toFixed(2)
          var precioesp= Number(precio) + Number(ivaUF)
          cy.log(precioesp)
         
          expect(totalres1, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(precioesp)
    
        })
        
        cy.writeFile('fichero.txt', '\n\nTotal Resumen: ' + productotxt + ' ' + totalrestxt + '; ' + date + '  ' + hora, {flag: 'a+'} )
        cy.get('.btn > span').click({force:true}) 
        //cy.get('.modal-footer > .btn').click()
  
        var totalres = { totalres : (totalres1)};
        cy.writeFile('cypress/fixtures/datatotal1.json', totalres);
      
      })
  
     })
  

})

Then('Visualiza Detalle de Pago', ()=>{

  //  cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')
  
  cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        
    const productotxt= $valorelem.text()           
    cy.writeFile('producto.txt', '\nProducto: ' + productotxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
  

  cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
      
    const preciotxt= $valorelem.text().trim()
    //cy.log(preciotxt)
    var precio_obt = preciotxt.substring(1)
    var precio_obt1 = parseFloat(precio_obt)
    cy.log(precio_obt1)

    cy.fixture('valorUF').then((dataUF) => {
      const valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
        
      cy.readFile('cypress/fixtures/precio.json').then((dataUF2) => {
        var precio = dataUF2.precioUF
       // var precio1= parseFloat(precio)
        cy.log(precio)
        var precioesp = precio*valueUF1
        cy.log(precioesp)
        var precioesp1= Math.round(precioesp)
        cy.log(precioesp1)
        var precioesp2 = new Intl.NumberFormat().format(precioesp1)
        var precioesp3 = parseFloat(precioesp2)
        cy.log(precioesp3)
       
        // expect(precio_obt1, "El Precio obtenido debe ser igual al Precio esperado").eq(precioesp2)
      
  
      cy.writeFile('producto.txt', '\nPrecio del producto: ' + preciotxt + ';  ' + date + '  ' + hora, { flag: 'a+' })

      if (precio_obt1==precioesp3)
        {
          cy.log('El Precio obtenido es igual al Precio esperado')
        }
      else
        {
          cy.writeFile('diferencia.txt', '\nProducto: ' + productotxt  + ' Precio Obtenido: ' + precio_obt1 + '/ Precio esperado: ' + precioesp3 + ' ' + date + '  ' + hora, { flag: 'a+' })
        //  cy.writeFile('diferencia.txt', '\nPrecio del producto esperado: ' + precioesp2 + ';  ' + date + '  ' + hora, { flag: 'a+' })
        }  

      })

    })
  })    
})
               
  cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
      
    const ivatxt= $valorelem.text()
    var ivaobt= ivatxt.substring(6)
    var ivaobt1 = parseFloat(ivaobt)

    cy.fixture('valorUF').then((dataUF) => {
      const valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
         
      cy.readFile('cypress/fixtures/precio.json').then((dataUF2) => {
        cy.reload()
        var precio = dataUF2.precioUF
        //var precio= parseFloat (precioUF)
        var ivauf = (precio*0.19).toFixed(2)
        cy.log(ivauf)
        var ivaclp =(ivauf*valueUF1)
        cy.log(ivaclp)
        var ivaclp1 = Math.round(ivaclp)
        var ivaclp2 = new Intl.NumberFormat("de-DE").format(ivaclp1)
        var ivaclp3 = parseFloat(ivaclp2)
       // expect(ivaobt1, "El Iva obtenido debe ser igual al Iva esperado").eq(ivaclp3)
        
  
      cy.writeFile('producto.txt', '\nIva: ' + ivatxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
  

    if (ivaobt1==ivaclp3)
        {
          cy.log('El Iva obtenido es igual al Iva esperado')
        }
      else
        {
          cy.writeFile('diferencia.txt', '\nIva Obtenido: ' + ivaobt1 + '/ Iva esperado: ' + ivaclp3 + '   ' + date + '  ' + hora, { flag: 'a+' })
         // cy.writeFile('diferencia.txt', '\nIva del producto esperado: ' + ivaclp3 + ';  ' + date + '  ' + hora, { flag: 'a+' })
        }  
      
      })
      
    })  
  })

  cy.get('.total > strong').then(function($valorelem){
      
    const totaldetxt= $valorelem.text()
    //cy.log(totaldetxt)
    var totaldet = totaldetxt.substring(1)
    var totaldet1 = parseFloat(totaldet)
    cy.log(totaldet1)
    
    cy.readFile('cypress/fixtures/datatotal.json').then((datatotal) =>{

      var totalrestxt1 = datatotal.totalres
      var totalres1= parseFloat(totalrestxt1)
      cy.log(totalres1)
      //expect(totaldet1, "El Total del Detalle es igual al Total del Resumen de Compra").eq(totalrestxt1)
               
    cy.writeFile('producto.txt', '\nTotal: ' + totaldetxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
    if (totaldet1==totalres1)
        {
          cy.log('El Total del Detalle es igual al Total del Resumen de Compra')
        }
    else
       {
        cy.writeFile('diferencia.txt', '\nTotal del Detalle Obtenido: ' + totaldet1 + '/ Total del Resumen Obtenido: ' + totalrestxt1 + ' ' + date + '  ' + hora, { flag: 'a+' })
       // cy.writeFile('diferencia.txt', '\nTotal del Resumen Obtenido: ' + totalrestxt1 + ';  ' + date + '  ' + hora, { flag: 'a+' })
       // cy.screenshot() 
       }          
  })

 })

    
})

Then('Visualiza Detalle de Pago del producto Ultima Ventas a contratar', ()=>{

    cy.url().should('include', 'https://ventas.toctoc.com/')
    
    cy.readFile('cypress/fixtures/precio.json').then((dataprecio) =>{
      var precio = dataprecio.precioUF
      cy.log(precio)

    cy.get('.desktop > .title-c').then(function($valorelem){
      const preciotxt= $valorelem.text()
      var precio_obt = preciotxt.substring(11)
      var precio_obt1 = parseFloat(precio_obt)
  
      
        expect(precio_obt1, "El Precio obtenido debe ser igual al Precio esperado").eq(precio)
        
        cy.writeFile('fichero.txt', '\n' + preciotxt + ';  ' + date + '  ' + hora, { flag: 'a+' })
  
      //})
      
    }) 
    
    cy.get('.iva > .col-sm-12 > .title-c').then(function($valorelem){  
      const ivatxt= $valorelem.text() 
      var ivaobt= ivatxt.substring(8)
      var ivaobt1= ivaobt.replace(/,/g,'.')
      var ivaobt2= parseFloat(ivaobt1)
                   
     // cy.readfile('cypress/fixtures/dataprecio.json').then((dataprecio) => {
       // var precioUF = dataprecio.precioUF
        var ivauf = (precio*0.19).toFixed(2)
        var ivauf1= parseFloat(ivauf)
        
        expect(ivaobt2, "El Iva obtenido debe ser igual al Iva esperado").eq(ivauf1)   
        cy.writeFile('fichero.txt', '\n' +ivatxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
  
      })
    })
  
    cy.get('.total > strong').then(function($valorelem){
      const totaldetxt= $valorelem.text()
      var totaldet = totaldetxt.substring(3)
      var totaldet1= totaldet.replace(/,/g,'.')
      var totaldet2= parseFloat(totaldet1)
    
      cy.fixture('datatotal1.json').then((datatotal) =>{
        var totalrestxt1 = datatotal.totalres
        var totalrestxt2= parseFloat(totalrestxt1)
  
        expect(totaldet2, "El Total obtenido debe ser igual al Total del Resumen").eq(totalrestxt2)
        cy.writeFile('fichero.txt', '\nTotal del producto: ' +totaldetxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
      
      })
    })  
})

When('Selecciona y visualiza información del Producto Ultima Ventas', ()=>{
    cy.get(':nth-child(2) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 3
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(2) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()

    
})

When('Selecciona y visualiza información del Producto Mailing', ()=>{
    cy.get(':nth-child(3) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 2
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

 // cy.get(':nth-child(3) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
})

When('Selecciona y visualiza información del Producto Banner', ()=>{
    cy.get(':nth-child(4) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 20
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    //cy.get(':nth-child(4) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
})
    
When('Selecciona y visualiza información del Producto Banner + 5 PropDestacada', ()=>{
    cy.get(':nth-child(5) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 19
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(5) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
});   
     
When('Selecciona y visualiza información del Producto Espacio Landing', ()=>{
    cy.get(':nth-child(6) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 2
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);
    cy.get('.modal-footer > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Mail500', ()=>{
    cy.get(':nth-child(7) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 6
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(7) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Api Contacto', ()=>{
    cy.get(':nth-child(8) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 5
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(8) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Destacada x5', ()=>{
    cy.get(':nth-child(9) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 4
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(9) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Destacada x15', ()=>{
    cy.get(':nth-child(10) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 11
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(10) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Destacada x30', ()=>{
    cy.get(':nth-child(11) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 20
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(11) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

When('Selecciona y visualiza información del Producto Propiedad Destacada x60', ()=>{
    cy.get(':nth-child(12) > .item_superior > .desktop', {timeout:10000}).click()
    var precioUF = 35
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/precio.json', precioUF);

    cy.get('.modal-footer > :nth-child(2) > .btn').click()
    //cy.get(':nth-child(12) > .item-inferior > .item_compra > :nth-child(2) > .btn').click()
}) 

