import {Given} from "cypress-cucumber-preprocessor/steps"

const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

Given('Obtiene y registra las metricas de Toctoc Buscador', () =>{

    cy.readFile('cypress/results/mochawesome.json').then((data) =>{
            
            var comprar = data.results[0].suites[0].tests[0].duration
            cy.log(comprar)
            var state_com = data.results[0].suites[0].tests[0].state
            cy.log(state_com)
            var arriendo = data.results[0].suites[0].tests[1].duration
            cy.log(arriendo)
            var state_ar = data.results[0].suites[0].tests[1].state
            cy.log(state_ar)
            var codigo = data.results[0].suites[0].tests[2].duration
            cy.log(codigo)
            var state_co = data.results[0].suites[0].tests[2].state
            cy.log(state_co)
            
            
           
            cy.request({
                url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_buscador/rows', 
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
                  'content-type': 'application/json'
                  },
                body : {
                  'rows': [
                        {
                      'cells': [
                               {'column': 'c-VX_v928at_', 'value': date},
                               {'column': 'c-4PppzRRWWd', 'value': comprar},
                               {'column': 'c-O89FzQ85dO', 'value': state_com},
                               {'column': 'c-4C_sIMS52E', 'value': arriendo},
                               {'column': 'c-7AA6sVnTef', 'value': state_ar},
                               {'column': 'c-q0TLfl38tm', 'value': codigo},
                               {'column': 'c-KOsUz0ISxx', 'value': state_co}
                                                             
                              ]
                      }
                  ] 
                }
                
              }).then((response) => {
                 expect(response.status).to.eq(202)
               })

               
           
        })
  
})