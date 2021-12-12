const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/Product");
const categoryRouter = require("./routes/Category");

const app = express();
require("./db");

app.use(cors());
app.use(express.json());

//Rutas base para la api
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

// Levanta el servidor en puerto 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("server funcionando en puerto 3000");
});
