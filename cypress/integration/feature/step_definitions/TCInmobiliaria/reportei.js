import {Given} from "cypress-cucumber-preprocessor/steps"

const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')  

Given('Obtiene y registra las metricas de Inmobiliaria', () =>{

    cy.readFile('cypress/results/mochawesome.json').then((data) =>{
            
     
      var desktop = data.results[0].suites[0].tests[0].duration
      cy.log(desktop)
      var resultado1 = data.results[0].suites[0].tests[0].state
      cy.log(resultado1)
      var mobile = data.results[0].suites[0].tests[1].duration
      cy.log(mobile)
      var resultado2 = data.results[0].suites[0].tests[1].state
      cy.log(resultado2)
      var resultado3 = data.stats.passes
      cy.log(resultado3)
      var resultado_final = "passed"
      if (resultado3 == 1)
          {
            resultado_final = resultado_final.replace("passed","failed")
            cy.log(resultado_final)
          }
           
      cy.request({
        url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_inmobiliaria/rows', 
        method: 'POST',
        headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
                  'content-type': 'application/json'
                  },
        body : {
                  'rows': [
                        {
                      'cells': [
                               {'column': 'c-P8bKILOnll', 'value': date},
                               {'column': 'c-3-5K7mB9yR', 'value': desktop},
                               {'column': 'c-mtojuFh3v7', 'value': resultado1},
                               {'column': 'c-BZr-iKMcwL', 'value': mobile},
                               {'column': 'c-K2uI4L1Mgw', 'value': resultado2},
                               {'column': 'c-rRZh1obNIv', 'value': resultado_final}
                                                             
                              ]
                      }
                  ] 
                }
                
      }).then((response) => {
        expect(response.status).to.eq(202)
        })

               
           
    })
  
})

    
    