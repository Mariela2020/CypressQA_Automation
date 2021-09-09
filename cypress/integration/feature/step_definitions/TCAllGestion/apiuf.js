const d = new Date
const date = [d.getDate(),
  d.getMonth() + 1,
  d.getFullYear()].join('-') 

const date1 = [d.getFullYear(),
  [(d.getMonth() < 9 ? '0' : '') + (d.getMonth() + 1)],
  d.getDate()].join('-')   

const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('Verifica el registro de la UF', () =>{  
  
  cy.readFile('cypress/fixtures/valorUF.json').then((data1) =>{
    var dat = data1.fecha
    cy.log(dat)
    cy.log(date1)
    //expect(dat).to.equal(date1)

    if (dat==date1)
      {
        cy.log('Ya se registro el Valor UF')
        return
      }
    else
      {
        cy.log('opcion else')
       /* cy.request(`https://mindicador.cl/api/uf/${date}`).as('respuestaUF')
        cy.get('@respuestaUF').then((response) => {
          var value = response.body.serie.map(e => e.valor).toString();
          //var value1 = Math.round (value)
          var someArr = { uf : (value),
                          fecha : (date) };
          cy.writeFile('cypress/fixtures/valorUF.json', someArr);
          cy.writeFile('registroUF.txt', '\nUF: ' + value + ' ' + date + '  ' + hora, {flag:'a+'})*/
          
        cy.request('https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=44eb9df2ec197fddf46057acc05f1b2f15e5c75b&formato=json').as('respuestaUF')
        cy.get('@respuestaUF').then((response) => {
          //cy.log(response)
          var valor = response.body.UFs[0].Valor
            cy.log(valor)
          var fecha = response.body.UFs[0].Fecha
            cy.log(fecha)
          //var value = response.body.toString();
          //var value1 = Math.round (value)
          var someArr = { uf : (valor),
                          fecha : (fecha) };
                      
          cy.writeFile('cypress/fixtures/valorUF.json', someArr);
          cy.writeFile('registroUF.txt', '\nUF: ' + valor + ' ' + fecha + '  ' + hora, {flag:'a+'})

        })

      }  
  }) 

/*Given('Navega a la pagina de Indicadores de Chile', () =>{
  
    cy.request(`https://mindicador.cl/api/uf/${date}`).as('respuestaUF')
}) 

When('Guarda el valor de la UF del dia', ()=>{
      
    cy.get('@respuestaUF').then((response) => {
      var value = response.body.serie.map(e => e.valor).toString();
      //var value1 = Math.round (value)
      var someArr = { uf : (value), fecha: (date)};
      cy.writeFile('cypress/fixtures/dataUF.json', someArr);
      cy.writeFile('registroUF.txt', '\nUF: ' + value + ' ' + date + '  ' + hora, {flag:'a+'})
    })

})  

Then('Verifica el registro del dato', ()=>{    
    
  cy.readFile("cypress/fixtures/dataUF.json", (err, data) => {
    
    if (err) {
        return cy.log.error(err);
    }

  }).then((data) => {

      cy.log(data);
  }) */ 

})  