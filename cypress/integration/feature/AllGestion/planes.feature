@planes
Feature: Catalogo de Planes
 
  Como usuario quiero contratar un servicio de un Plan de Publicación

@api
  Scenario: Obtiene el Valor de la UF del dia
    Given Verifica el registro de la UF

@planes-Inicia
  Scenario: Ingresar al catalogo de planes de Gestion Corredor (Plan Inicia)
    Given El usuario se encuentra en Gestion Corredor
      And Hace click en el botón Ver Planes
      And Selecciona el plan Inicia 
     When Registra datos del Usuario
      And Llena los formularios del contrato
      And Aceptar los Términos y condiciones de TOCTOC 
      And Visualizar Detalle del contrato del plan a contratar
     Then Visualizar Detalle de Pago

@planes-Crece
  Scenario: Ingresar al catalogo de planes de Gestion Corredor (Plan Crece)
    Given El usuario se encuentra en Gestion Corredor
      And Hace click en el botón Ver Planes
      And Selecciona el plan Crece
     When Registra datos del Usuario
      And Llena los formularios del contrato
      And Aceptar los Términos y condiciones de TOCTOC 
      And Visualizar Detalle del contrato del plan a contratar
     Then Visualizar Detalle de Pago

@planes-Acelera
  Scenario: Ingresar al catalogo de planes de Gestion Corredor (Plan Acelera)
    Given El usuario se encuentra en Gestion Corredor
      And Hace click en el botón Ver Planes
      And Selecciona el plan Acelera
     When Registra datos del Usuario
      And Llena los formularios del contrato
      And Aceptar los Términos y condiciones de TOCTOC 
      And Visualizar Detalle del contrato del plan a contratar
     Then Visualizar Detalle de Pago

@planes-Escala
  Scenario: Ingresar al catalogo de planes de Gestion Corredor (Plan Escala)
    Given El usuario se encuentra en Gestion Corredor
      And Hace click en el botón Ver Planes
      And Selecciona el plan Escala
     When Registra datos del Usuario
      And Llena los formularios del contrato
      And Aceptar los Términos y condiciones de TOCTOC 
      And Visualizar Detalle del contrato del plan a contratar
     Then Visualizar Detalle de Pago     