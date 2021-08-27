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
            
            var duracion = data.results[0].suites[0].tests[0].duration
            cy.log(duracion)
            var resultado = data.results[0].suites[0].tests[0].state
            cy.log(resultado)
        
           
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
                               {'column': 'c-3-5K7mB9yR', 'value': duracion},
                               {'column': 'c-mtojuFh3v7', 'value': resultado}
                                                             
                              ]
                      }
                  ] 
                }
                
              }).then((response) => {
                 expect(response.status).to.eq(202)
               })

               
           
        })
  
})
    
    