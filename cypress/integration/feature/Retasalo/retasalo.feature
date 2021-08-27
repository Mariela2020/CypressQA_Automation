Feature: Tasar una Propiedad

    Como usuario quiero obtener un informe de tasación  

    Background: Retasalo 
        Given El usuario se encuentra en la página de Retasalo
          
   Scenario: Obtiene un Informe con Credenciales de Administrador
         
        When Busca la Propiedad por Rol
            |comuna                    | rol            | direccion                         |
            |Santiago                  |16-16           |16-16 - ROSAL 379 DP 1 - Santiago  |  
         And Ingresa los credenciales de administrador 
            |email                     | password |
            |camilo.olivos@toctoc.com  | 123456   |  
        Then El sistema valida credenciales y muestra informe
         And El sistema muestra informe 
  
    Scenario: Obtiene un Informe con Credenciales de particular
         
        When Busca la Propiedad por Rol
            |comuna                    | rol            | direccion                     |
            |Las Condes                |2431-14         |2431-14 - AV LAS CONDES 12631  |   
         And Ingresa los credenciales de usuario 
            |email                     | password       |
            |hurtadomariela2@gmail.com | prueba         |  
        Then El sistema muestra el informe
         And Visualiza medio de pago disponible 
  