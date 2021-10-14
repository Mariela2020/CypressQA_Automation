Feature: Buscador Principal HomePage

    Como usuario quiero buscar una propiedad  

   # Background: Buscador 
    #    Given El usuario esta en Toctoc y cierra el mensaje
          
  
   Scenario: Busca una Propiedad en Venta

       Given El usuario esta en Toctoc 
        When El usuario hace click en el Boton Comprar 
         And Ingresa una comuna o region de interes
             |region                  | 
             |Ñuble, Chile            |  
         And El sistema muestra las propiedades en Venta
        Then Selecciona la primera propiedad en Venta
        
   
   Scenario: Busca una Propiedad en Arriendo

       Given El usuario esta en Toctoc 
        When El usuario hace click en el Boton Arrendar
         And Ingresa una comuna de interes
             |comuna                   | 
             |Santiago, Santiago       |  
         And El sistema muestra las propiedades en Arriendo
        Then Selecciona la primera propiedad en Arriendo
        
  Scenario: Busca una Propiedad por codigo y cotiza la propiedad
        
        Given El usuario esta en Toctoc
      # When Inicia sesion con credenciales valida
        When El usuario hace click en el Link Buscar por codigo
         And Ingresa el codigo de la propiedad
             |codigo        | 
             |TT-1804829    |  
         And El sistema muestra la ficha propiedad
       # Then El usuario cotiza una planta de interes
 
  Scenario: Busca una Propiedad en Venta en mobile

       Given El usuario esta en Toctoc en mobile
        When El usuario hace click en el Boton Comprar 
         And Ingresa una comuna o region de interes
             |region                  | 
             |Ñuble, Chile            |
         And El sistema muestra las propiedades en Venta en mobile
        Then Selecciona la primera propiedad en Venta en mobile
        
   
   Scenario: Busca una Propiedad en Arriendo en mobile

       Given El usuario esta en Toctoc en mobile
        When El usuario hace click en el Boton Arrendar
         And Ingresa una comuna de interes en mobile
             |comuna                   | 
             |San Miguel, Santiago     |  
         And El sistema muestra las propiedades en Arriendo en mobile
        Then Selecciona la primera propiedad en Arriendo
        
  Scenario: Busca una Propiedad por codigo y cotiza la propiedad en mobile
        
        Given El usuario esta en Toctoc en mobile
       ## When Inicia sesion con credenciales valida
        When El usuario hace click en el Link Buscar por codigo
         And Ingresa el codigo de la propiedad
             |codigo        | 
             |TT-1804829    |  
         And El sistema muestra la ficha propiedad
       ## Then El usuario cotiza una planta de interes