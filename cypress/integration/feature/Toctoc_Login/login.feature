Feature: Iniciar Sesion HomePage

    Como usuario quiero iniciar sesión 

   # Background: Login 
   #     Given El usuario esta en la página de Toctoc, cierra el mensaje y hace click en botón Entrar  

   Scenario: Iniciar sesión con Credenciales valida
      
       Given El usuario esta en la página de Toctoc, cierra el mensaje y hace click en botón Entrar 
        When Ingresa credenciales valida 
            |email                     | validopassword |
            |hurtadomariela2@gmail.com | prueba         |  
        Then El sistema valida credenciales y da la bienvenida al usuario
  
   Scenario: Iniciar sesión con Credenciales invalida
         
       Given El usuario esta en la página de Toctoc, cierra el mensaje y hace click en botón Entrar      
        When Ingresa credenciales invalida 
            |email                       | invalidopassword |
            |hurtadomariela2@gmail.com   | 12345            |
        Then El sistema muestra mensaje de error
            |mensaje                                                 |
            |La información entregada no permite ingresar al sistema,|
        
  Scenario: Recuperar contraseña
         
       Given El usuario esta en la página de Toctoc, cierra el mensaje y hace click en botón Entrar  
        When El usuario hace click en el Link 
         And El sistema solicita correo registrado
            |email                       | 
            |hurtado_mariela@hotmail.com |  
        Then Se envia un codigo al correo ingresado
            |mensaje                 |
            |Se ha enviado un correo | 


   Scenario: Iniciar sesión con Credenciales valida mobile

       Given El usuario esta en la página de Toctoc en mobile
         And Cierra el mensaje y hace click en botón Entrar 
        When Ingresa credenciales valida 
            |email                     | validopassword |
            |hurtadomariela2@gmail.com | prueba         |  
        Then El sistema valida credenciales y da la bienvenida al usuario
  
   Scenario: Iniciar sesión con Credenciales invalida mobile

       Given El usuario esta en la página de Toctoc en mobile
         And Cierra el mensaje y hace click en botón Entrar 
        When Ingresa credenciales invalida 
            |email                       | invalidopassword |
            |hurtadomariela2@gmail.com   | 12345            |
        Then El sistema muestra mensaje de error
            |mensaje                                                 |
            |La información entregada no permite ingresar al sistema,|
        
  Scenario: Recuperar contraseña mobile
         
       Given El usuario esta en la página de Toctoc en mobile
         And Cierra el mensaje y hace click en botón Entrar
        When El usuario hace click en el Link 
         And El sistema solicita correo registrado
            |email                       | 
            |hurtado_mariela@hotmail.com |  
        Then Se envia un codigo al correo ingresado
            |mensaje                 |
            |Se ha enviado un correo | 