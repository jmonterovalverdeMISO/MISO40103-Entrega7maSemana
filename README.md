# Entrega Semana 7 - Pool de datos
## Ghost 
Proyecto en el que se elabora una suite de pruebas e2e para Ghost CMS (para las versiones 3.3.0 y 3.42.5) utilizando como API de automatización [Cypress](https://www.cypress.io/).
<br/>
### Estrategia de generación de datos
Las pruebas realizadas se encuentran desarrolladas en cypress. Para la ejecución de estas pruebas se usaron 3 tipos de pool de datos:
1. **Pool de datos a-priori**: usando Mockaroo se generaron archivos `.json` que cubren diferentes escenarios (link a los mismos en secciones posteriores)
2. **Pool de datos (pseudo) aleatorio dinámico**: usando el api de Mockaroo realizamos una solicitud para generar nuevas tuplas de datos cada vez que se corren la suite de pruebas, estas nuevas tuplas se concatenan en su archivo `.json` correspondiente, simultaneamente el suite de prueba escoge tuplas del data pool aleatoriamente de esta forma, durante cada ejecución el suite va generando y utilizando datos nuevos. 
3. **Pool de datos aleatorio**: se realizo una interface que implementa Faker.js para generar datos en aleatoriamente de forma que los metodos siempre retornaran un valor diferente siempre que sea llamado en cada corrida.

## Integrantes
1. Carlos Garcia - cj.garcias1@uniandes.edu.co
2. Jose Montero - j.monterov@uniandes.edu.co
3. Juan Camilo Daza - jc.dazam1@uniandes.edu.co
4. Manuel Bello - m.bello@uniandes.edu.co

### Funcionalidades y escenarios de pruebas
En [este documento](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/Funcionalidades) se describen las funcionalidades a probar y los escenarios que se generaron se pueden ver en este otro [enlace](https://github.com/jmonterovalverdeMISO/MISO40103-Entrega7maSemana/wiki/Lista-de-Escenarios). A continuación de tiene una tabla resumen de las mismas:

| Id | Nombre | 
| - | - | 
| [F01](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F01) | Crear Tag |
| [F02](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F02) | Crear Post | 
| [F03](F03) | Editar Post | 
| [F04](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F04) | Crear Page | 
| [F05](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F05) | Editar Page | 

Todas las funcionalidades tinen escenarios para ser probadas en ambas versiones de Ghost.

# Correr pruebas (Headless) :rocket:
## Pasos para despliegue
1. Instalar [docker](https://www.docker.com/get-started) segun tu sistema operativo
2. Clonar este repositorio en su máquina local. Si necesita ayuda puede consultar este [link](https://docs.github.com/es/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
3. Abrir una consola que esté ubicada sobre el folder del repositorio que clonó en el paso 2.
4. Verificar que el servicio de docker está corriendo.
5. Ejecutar `docker-compose build` en una consola para construir las imagenes de VRT, ghost, cypress y kraken. 
6. Ejecutar `docker-compose up -d` en una consola para iniciar infraestructura de pruebas.

Una vez ejecutados los pasos se desplegarán automaticamente la infraestructura con Ghost y se ejecutaran los suite de pruebas headless.

AGREGAR IMAGEN DOCKER



## Ver ejecución de pruebas
Para visualizar el progreso de un contenedor puedes ejecutar los siguientes comandos en una consola:
Notas: 
- La composición y la ejecución de los escenarios tarda un tiempo dependiendo de la capacidad de su máquina local, por lo que si en el primer intento no le salen logs, dele unos segundos más para que el componente se ejecute

1. Cypress `docker logs cypress-chrome`
2. Ghost `docker logs ghost`

## Ver resultados
Una vez la ejecución de las pruebas hayan finalizado los resultados se guardan en las siguientes direcciones segun el suite de pruebas

1. Cypress `cypress-ghost/cypress`

## Reiniciar ejecución de pruebas
Para realizar una nueva ejecución limpia de la suite de pruebas se recomienda remover los contenedores, ejecutando en la consola:

1. `docker-compose down`
2. `docker-compose up -d`
