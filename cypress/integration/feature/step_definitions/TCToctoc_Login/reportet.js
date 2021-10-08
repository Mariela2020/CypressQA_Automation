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

            var valida1 = data.results[0].suites[0].tests[3].duration
            cy.log(valida1)
            var state_va1 = data.results[0].suites[0].tests[3].state
            cy.log(state_va1)
            var invalida1 = data.results[0].suites[0].tests[4].duration
            cy.log(invalida1)
            var state_in1 = data.results[0].suites[0].tests[4].state
            cy.log(state_in1)
            var recuperar1 = data.results[0].suites[0].tests[5].duration
            cy.log(recuperar1)
            var state_re1 = data.results[0].suites[0].tests[5].state
            cy.log(state_re1)
            
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
           
              cy.request({
                url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_login_mobile/rows', 
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
                  'content-type': 'application/json'
                  },
                body : {
                  'rows': [
                        {
                      'cells': [
                               {'column': 'c-EI48jvf4zm', 'value': date},
                               {'column': 'c-K93c0h8DST', 'value': valida1},
                               {'column': 'c-oZGIpgd5Gf', 'value': state_va1},
                               {'column': 'c-DCkk6O-9TX', 'value': invalida1},
                               {'column': 'c-89orHRJNgH', 'value': state_in1},
                               {'column': 'c-qYT19W3gV4', 'value': recuperar1},
                               {'column': 'c-nMHNjVNeel', 'value': state_re1}
                                                             
                              ]
                      }
                  ] 
                }
                
              }).then((response) => {
                 expect(response.status).to.eq(202)       
                 
             })
  
  })

})
    