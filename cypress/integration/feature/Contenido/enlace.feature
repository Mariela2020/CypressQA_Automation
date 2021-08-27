Feature: Obtiene los Enlaces de Propiedades en los landing
 
  Como usuario quiero Registrar los Enlaces de las Propiedades en los Landing.

 @Landing
  Scenario: Obtiene los Enlaces de las Propiedades
    Given Visita la URL del landing  
      And Registra los enlaces de las propiedades
  
  @TourVirtual
  Scenario: Obtiene los Precio de las Calugas
    Given El usuario se encuentra en el landing TourVirtual 
      And Registra los precios de las Calugas