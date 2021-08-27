const d = new Date
const date = [d.getDate(),
  d.getMonth() + 1,
  d.getFullYear()].join('-') 

const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('Verifica el registro de la UF', () =>{  
  cy.readFile('cypress/fixtures/valorUF.json').then((data1) =>{
    var dat = data1.fecha
    cy.log(dat)
    //expect(dat).to.equal(d)
    if (dat==date)
      {
        cy.log('Ya se registro el Valor UF')
        return
      }
    else
      {
        cy.log('opcion else')
        cy.request(`https://mindicador.cl/api/uf/${date}`).as('respuestaUF')
        cy.get('@respuestaUF').then((response) => {
          var value = response.body.serie.map(e => e.valor).toString();
          //var value1 = Math.round (value)
          var someArr = { uf : (value),
                          fecha : (date) };
          cy.writeFile('cypress/fixtures/valorUF.json', someArr);
          cy.writeFile('registroUF.txt', '\nUF: ' + value + ' ' + date + '  ' + hora, {flag:'a+'})
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