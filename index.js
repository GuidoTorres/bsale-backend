
const express = require("express");

//aca importo lo que es cors para que una vez el proyecto este ne deploy se pueda acceder desde cualquier ip
const cors = require("cors");
const productRouter = require("./routes/Product");
const categoryRouter = require("./routes/Category");

const app = express();
//se ejucuta el archivo db
require("./db");

//aca se pone en uso lo del cors
app.use(cors());
//esto me permite formatear a json la data que devuelvo
app.use(express.json());

//Rutas base para la api, en base a estas creo las otras
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

// Levanta el servidor en puerto 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("server funcionando en puerto 3000");
});

// le agrego los json que devuelme en el readme de este archivo
