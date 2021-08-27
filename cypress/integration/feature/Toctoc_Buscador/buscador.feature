Feature: Buscador Principal HomePage

    Como usuario quiero buscar una propiedad  

    Background: Buscador 
        Given El usuario esta en Toctoc y cierra el mensaje
          
  
   Scenario: Busca una Propiedad en Venta
         
        When El usuario hace click en el Boton Comprar 
         And Ingresa una comuna o region de interes
             |region                  | 
             |Ñuble, Chile            |  
         And El sistema muestra las propiedades en Venta
        Then Selecciona la primera propiedad en Venta
        
   
   Scenario: Busca una Propiedad en Arriendo
         
        When El usuario hace click en el Boton Arrendar
         And Ingresa una comuna de interes
             |comuna                   | 
             |Santiago, Santiago       |  
         And El sistema muestra las propiedades en Arriendo
        Then Selecciona la primera propiedad en Arriendo
        
  Scenario: Busca una Propiedad por codigo y cotiza la propiedad
        
        When Inicia sesion con credenciales valida
         And El usuario hace click en el Link Buscar por codigo
         And Ingresa el codigo de la propiedad
             |codigo        | 
             |TT-1248100    |  
         And El sistema muestra la ficha propiedad
        Then El usuario cotiza una planta de interes