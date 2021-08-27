import {Given} from "cypress-cucumber-preprocessor/steps"

const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

Given('Obtiene y registra las metricas del Login', () =>{

    cy.readFile('cypress/results/mochawesome.json').then((data) =>{
            cy.log(data)
            var fecha = data.stats.end
            cy.log(fecha)
            var valida = data.results[0].suites[0].tests[0].duration
            cy.log(valida)
            var state_va = data.results[0].suites[0].tests[0].state
            cy.log(state_va)
            var invalida = data.results[0].suites[0].tests[1].duration
            cy.log(invalida)
            var state_in = data.results[0].suites[0].tests[1].state
            cy.log(state_in)
            var recuperar = data.results[0].suites[0].tests[2].duration
            cy.log(recuperar)
            var state_re = data.results[0].suites[0].tests[2].state
            cy.log(state_re)
            
            
           
            cy.request({
                url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_login/rows', 
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
                  'content-type': 'application/json'
                  },
                body : {
                  'rows': [
                        {
                      'cells': [
                               {'column': 'c-3Ljvc1j9EV', 'value': date},
                               {'column': 'c-MA8lt2R_S0', 'value': valida},
                               {'column': 'c-U0JKzOKEmR', 'value': state_va},
                               {'column': 'c-zAJYy4Do8l', 'value': invalida},
                               {'column': 'c-FqWpvPPq1e', 'value': state_in},
                               {'column': 'c-wtLLxU7YqZ', 'value': recuperar},
                               {'column': 'c-7wgyII5GR9', 'value': state_re}
                                                             
                              ]
                      }
                  ] 
                }
                
              }).then((response) => {
                 expect(response.status).to.eq(202)
               })

               
           
        })
  
})
    