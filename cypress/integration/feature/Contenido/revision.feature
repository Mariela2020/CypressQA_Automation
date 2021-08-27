Feature: Revisa el Status de los Enlaces en los landing
 
  Como usuario quiero Revisar los Enlaces de las Propiedades en los Landing.

 @Landing
  Scenario: Revisa el estado de los Enlaces en los landing
    Given Visita la URL del landing  
      And Verifica y Registrar el direccionamiento de los enlaces



 @SitioWeb
  Scenario: Revisa el estado de los Enlaces en los Sitios Web
    Given Lee el archivo Json y Verifica el estatus de las URL