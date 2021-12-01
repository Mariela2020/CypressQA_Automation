Feature: Buscador Principal HomePage

    Como usuario quiero buscar una propiedad  
        
   @comprar-desktop 
   Scenario: Busca una Propiedad en Venta

       Given El usuario esta en Toctoc 
        When El usuario hace click en el Boton Comprar 
         And Ingresa una comuna o region de interes
             |region                  | 
             |Ñuble, Chile            |  
         And El sistema muestra las propiedades en Venta
        Then Selecciona la primera propiedad en Venta
        
   @arrendar-desktop
   Scenario: Busca una Propiedad en Arriendo

      Given El usuario esta en Toctoc 
        When El usuario hace click en el Boton Arrendar
         And Ingresa una comuna de interes
             |comuna                   | 
             |Santiago, Santiago       |  
         And El sistema muestra las propiedades en Arriendo
        Then Selecciona la primera propiedad en Arriendo
        
  @buscarxcod-desktop
  Scenario: Busca una Propiedad por codigo y cotiza la propiedad
        
        Given El usuario esta en Toctoc
      # When Inicia sesion con credenciales valida
        When El usuario hace click en el Link Buscar por codigo
         And Ingresa el codigo de la propiedad
             |codigo        | 
             |TT-1804829    |  
         And El sistema muestra la ficha propiedad
      # Then El usuario cotiza una planta de interes
 
   # @comprar-mobile
   # Scenario: Busca una Propiedad en Venta en mobile

   #    Given El usuario esta en Toctoc en mobile
   #     When El usuario hace click en el Boton Comprar 
   #      And Ingresa una comuna o region de interes en Moblle
   #          |region                  | 
   #          |Ñuble, Chile            |
   #      And El sistema muestra las propiedades en Venta en mobile
   #     Then Selecciona la primera propiedad en Venta en mobile
        
   #@arrendar-mobile
   #Scenario: Busca una Propiedad en Arriendo en mobile

   #    Given El usuario esta en Toctoc en mobile
   #     When El usuario hace click en el Boton Arrendar
   #      And Ingresa una comuna de interes en mobile
   #          |comuna                   | 
   #          |San Miguel, Santiago     |  
   #      And El sistema muestra las propiedades en Arriendo en mobile
   #     Then Selecciona la primera propiedad en Arriendo
        
   #@buscarxcod-mobile
   # Scenario: Busca una Propiedad por codigo y cotiza la propiedad en mobile
        
   #     Given El usuario esta en Toctoc en mobile
   #    # When Inicia sesion con credenciales valida
   #     When El usuario hace click en el Link Buscar por codigo
   #      And Ingresa el codigo de la propiedad
   #          |codigo        | 
   #          |TT-1804829    |  
   #      And El sistema muestra la ficha propiedad
   #    # Then El usuario cotiza una planta de interes