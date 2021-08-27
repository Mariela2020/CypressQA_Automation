Feature: Catalogo de Planes - Productos Marketing
 
  Como usuario quiero visualizar el Cátalogo de Inmobiliaria.

 Scenario: Ingresar al catalogo de Inmobiliaria en la página Toctoc, filtrar por nombre y visita una ficha de propiedad 
    Given El usuario se encuentra en la pagina Toctoc 
      And Hace click sobre el Menu Principal Inmobiliaria - Catalogo de Inmobiliarias 
      And Busca Inmobiliaria por nombre y hace click al boton buscar
     When Visualiza las propiedades de la Inmobiliaria
     Then Selecciona el primer proyecto