@productos
Feature: Catalogo de Productos Marketing
 
  Como usuario quiero contratar un servicio de Producto Marketing.

 @api
  Scenario: Obtiene el Valor de la UF del dia
    Given Verifica el registro de la UF
    
 @producto-PropDestacada
  Scenario: Ingresar al catologo de productos Markenting (Propiedad Destacada)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Propiedad Destacada
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-UltimaV
  Scenario: Ingresar al catologo de productos Markenting (Ultima Ventas)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Ultima Ventas
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto Ultima Ventas a contratar
     Then Visualiza Detalle de Pago del producto Ultima Ventas a contratar

@producto-Mailing
  Scenario: Ingresar al catologo de productos Markenting (Mailing)
   Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Mailing
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-Banner
  Scenario: Ingresar al catologo de productos Markenting (Banner)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Banner
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-Banner+5prop
  Scenario: Ingresar al catologo de productos Markenting (Banner + 5 PropDestacada)
   Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Banner + 5 PropDestacada
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-EspacioLanding 
  Scenario: Ingresar al catologo de productos Markenting (Espacio Landing)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Espacio Landing
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-Mail500
  Scenario: Ingresar al catologo de productos Markenting (Mail 500)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Mail500
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-ApiContacto
  Scenario: Ingresar al catologo de productos Markenting (Api Contacto)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Api Contacto
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-PropDestacadax5
  Scenario: Ingresar al catologo de productos Markenting (Prop.Destacada x5)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
    When Selecciona y visualiza información del Producto Propiedad Destacada x5
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-PropDestacadax15
  Scenario: Ingresar al catologo de productos Markenting (Prop.Destacada x15)
   Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
     When Selecciona y visualiza información del Producto Propiedad Destacada x15
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-PropDestacadax30
  Scenario: Ingresar al catologo de productos Markenting (Prop.Destacada x30)
    Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
    When Selecciona y visualiza información del Producto Propiedad Destacada x30
      And Verifica los datos almacenados 
     And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago

@producto-PropDestacadax60
  Scenario: Ingresar al catologo de productos Markenting (Prop.Destacada x60)
   Given El usuario está en Gestión Corredor
      And Inicia cuenta con credenciales valida
      And Hace click en el catalogo de Productos Marketing
    When Selecciona y visualiza información del Producto Propiedad Destacada x60
      And Verifica los datos almacenados 
      And Declara conocer y aceptar los Términos y condiciones de TOCTOC
      And Visualiza Detalle del contrato del producto a contratar
     Then Visualiza Detalle de Pago
