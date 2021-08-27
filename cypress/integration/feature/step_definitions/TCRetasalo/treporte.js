import {Given} from "cypress-cucumber-preprocessor/steps"

const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

Given('Obtiene y registra las metricas de Retasalo', () =>{

    cy.readFile('cypress/results/mochawesome.json').then((data) =>{
            cy.log(data)
            var fecha = data.stats.end
            cy.log(fecha)
            var admin = data.results[0].suites[0].tests[0].duration
            cy.log(admin)
            var state_ad = data.results[0].suites[0].tests[0].state
            cy.log(state_ad)
            var particular = data.results[0].suites[0].tests[1].duration
            cy.log(particular)
            var state_par = data.results[0].suites[0].tests[1].state
            cy.log(state_par)
                   
            cy.request({
                url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_retasalo/rows', 
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
                  'content-type': 'application/json'
                  },
                body : {
                  'rows': [
                        {
                      'cells': [
                               {'column': 'c-Lj1ylW5iRz', 'value': date},
                               {'column': 'c-L4wVLD487S', 'value': admin},
                               {'column': 'c-IBBIgc5aGJ', 'value': state_ad},
                               {'column': 'c-lJASklwGVt', 'value': particular},
                               {'column': 'c-R-wCc6B-F8', 'value': state_par},
                                                             
                              ]
                      }
                  ] 
                }
                
              }).then((response) => {
                 expect(response.status).to.eq(202)
               })

               
           
        })
  
})