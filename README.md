# Proyecto-Lenguajes-en-WWW---Equipo-11
Proyecto Lenguajes en WWW - Equipo 11

![imagen](https://user-images.githubusercontent.com/50089089/127596038-99a42f04-5d0d-4565-8c90-d797ede2b111.png)

* El mantenedor en React consiste de 4 componentes principales. Un index desde donde se instancia el componente principal App, desde el cual se instancian un componente Formulario y un componente Lista.
* El componente formulario guarda datos de encuesta para luego ser guardados por una peticion POST a la API REST. El componente Lista a través de una petición GET a la API obtiene las encuestas existentes para mostrarlas. 
* El diagrama de componentes muestra la comunación entre las 3 partes principales del proyecot: Un forntend en React, que se comunica con una API Gateway, la cual utiliza funciones Lambda para manejar las peticiones.
