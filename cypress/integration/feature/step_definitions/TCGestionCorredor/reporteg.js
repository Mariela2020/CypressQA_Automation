import {Given} from "cypress-cucumber-preprocessor/steps"

const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

Given('Obtiene y registra las metricas de Gestion Corredor', () =>{

    cy.readFile('cypress/results/mochawesome.json').then((data) =>{
            cy.log(data)
            var fecha = data.stats.end
            cy.log(fecha)
            var producto = data.results[0].suites[0].tests[0].duration
            cy.log(producto)
            var state_pro = data.results[0].suites[0].tests[0].state
            cy.log(state_pro)
            var planes = data.results[0].suites[0].tests[1].duration
            cy.log(planes)
            var state_pla = data.results[0].suites[0].tests[1].state
            cy.log(state_pla)
            var corredora = data.results[0].suites[0].tests[2].duration
            cy.log(corredora)
            var state_cor = data.results[0].suites[0].tests[2].state
            cy.log(state_cor)
            
            
           
            cy.request({
                url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_gestion/rows', 
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
                  'content-type': 'application/json'
                  },
                body : {
                  'rows': [
                        {
                      'cells': [
                               {'column': 'c-Q4t-6B3PF-', 'value': date},
                               {'column': 'c-X4szX8UpR_', 'value': producto},
                               {'column': 'c-1wFBzB1s5_', 'value': state_pro},
                               {'column': 'c-ubhRWv-4-G', 'value': planes},
                               {'column': 'c-RMqBLxd_f-', 'value': state_pla},
                               {'column': 'c-eQLlkgQ9xo', 'value': corredora},
                               {'column': 'c-J8hsfOEm1l', 'value': state_cor}
                                                             
                              ]
                      }
                  ] 
                }
                
              }).then((response) => {
                 expect(response.status).to.eq(202)
               })

               
           
        })
  
})
    