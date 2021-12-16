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

Json que devuelve:

{
    "count": 57,
    "rows": [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
        },
        {
            "id": 6,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1
        }
    ]
}


https://bsale-test1.herokuapp.com/api/v1/products/search?term=producto => ruta para el buscardor hecho desde el backend, en el que term es el termino escrito en la caja de busqueda.

Json que devuelve:


{
        "id": 8,
        "name": "PISCO ALTO DEL CARMEN 35º",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
        "price": 7990,
        "discount": 10,
        "category": 2
    },
    {
        "id": 9,
        "name": "PISCO ALTO DEL CARMEN 40º ",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
        "price": 5990,
        "discount": 0,
        "category": 2
    }
    }

https://bsale-test1.herokuapp.com/api/v1/products/:id => Con esta ruta se obtienen los productos de una determinada categoria. ID = id de la categoria 

Json que devuelve:


    {
        "id": 23,
        "name": "RON BACARDI AÑEJO",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
        "price": 4990,
        "discount": 0,
        "category": 3
    },
    {
        "id": 24,
        "name": "RON BACARDI 8 AÑOS",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
        "price": 5990,
        "discount": 0,
        "category": 3
    },


### Categories

https://bsale-test1.herokuapp.com/api/v1/categories => unica ruta y es solamente para mostrar la categoria con su respectivo id.

Json que devuelve:


    {
        "id": 1,
        "name": "bebida energetica"
    },
    {
        "id": 2,
        "name": "pisco"
    },
    {
        "id": 3,
        "name": "ron"
    },

## Rutas local

https://bsale-test1.herokuapp.com/api/v1 => cambiar esta ruta por localhost:3000/api/v1 







