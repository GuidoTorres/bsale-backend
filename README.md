# bsale-backend

Backend realizado en NodeJS.

## Descarga e instalación

Clonar el repositorio o descargar el archivo, usar el comando npm install en el terminal para instalar las librerias.

## Levantar servidor de manera local

Usar el comando npm start.


## Rutas heroku

### Products

https://bsale-test1.herokuapp.com/api/v1 => ruta base de esta nacen las otras

https://bsale-test1.herokuapp.com/api/v1/products => esta ruta sirve para hacer un get de todos los productos.

https://bsale-test1.herokuapp.com/api/v1/products/search?term=producto => ruta para el buscardor hecho desde el backend, en el que term es el termino escrito en la caja de busqueda.

https://bsale-test1.herokuapp.com/api/v1/products/id => Con esta ruta se obtienen los productos de una determinada categoria. ID = id de la categoria 

### Categories

https://bsale-test1.herokuapp.com/api/v1/categories => unica ruta y es solamente para mostrar la categoria con su respectivo id.

## Rutas local

https://bsale-test1.herokuapp.com/api/v1 => cambiar esta ruta por localhost:3000/api/v1 







