Feature: Catalogo de Planes - Productos Marketing
 
  Como usuario quiero contratar un servicio de un Plan o Producto Marketing.

 @producto
  Scenario: Ingresar al catologo de productos Markenting en la página Gestión Corredor y Contratar un servicio
    Given El usuario se encuentra en la página de Gestión Corredor y Hace click sobre el Entrar
      And Debe iniciar cuenta con credenciales de corredor valido
      And Hace click sobre el link Producto
     When Visualiza y selecciona el producto a contratar
      And Se verifica los datos almacenado en cada formulario
      And Tilda el checkbox Declaro conocer, aceptar los Términos y Hace click al botón Enviar
     And Visualiza Detalle contrato del producto a contratar
     Then Visualiza Detalle del pago y medio de pago disponibles  

 @planes
  Scenario: Ingresar al catalogo de planes en la página Gestion Corredor y Contratar un servicio
     Given El usuario se encuentra en la página de Gestion Corredor
      And Hace click sobre el botón Ver Planes
      And Visualiza la información del plan seleccionado y hace click al botón Contratar
    When Registra el Usuario
      And Llena los formularios con los campos solicitados
      And Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC del Plan
      And Visualizar el Detalle del contrato del plan a contratar
     Then Visualizar el Detalle de Pago y medio disponible

 @corredora
  Scenario: Ingresar al catalogo de corredoras en la página Gestion Corredor, filtrar por nombre y visita una ficha de propiedad 
   Given El usuario se encuentra en la página Gestion Corredor 
      And Hace click sobre el Menú Principal Corredoras - Catalogo de Corredoras 
      And Busca Corredora por nombre y hace click al botón buscar
     When Visualiza las propiedades de la corredora
      And Filtra por Región y Comuna
     Then Visualiza la ficha de la primera propiedad