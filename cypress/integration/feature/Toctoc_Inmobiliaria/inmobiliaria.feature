Feature: Catalogo de Inmobiliaria
 
  Como usuario quiero visualizar el Cátalogo de Inmobiliaria, filtrar por nombre y visitar una ficha de propiedad.

 @desktop
 Scenario: Ingresar al catalogo de Inmobiliaria en la página Toctoc en Desktop
    Given El usuario se encuentra en la pagina Toctoc 
      And Hace click sobre el Menu Principal Inmobiliaria - Catalogo de Inmobiliarias 
      And Busca Inmobiliaria por nombre y hace click al boton buscar
     When Visualiza las propiedades de la Inmobiliaria
     Then Selecciona el primer proyecto

@mobile
Scenario: Ingresar al catalogo de Inmobiliaria en la página Toctoc en mobile
    Given El usuario se encuentra en la pagina Toctoc mobile
      And Hace click sobre el Menu Principal Inmobiliaria 
      And Busca Inmobiliaria por nombre y hace click al boton buscar
     When Visualiza las propiedades de la Inmobiliaria
     Then Selecciona el primer proyecto