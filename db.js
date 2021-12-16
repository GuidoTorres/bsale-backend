const { Sequelize, DataTypes } = require("sequelize");

const CategoryModel = require("./models/category");
const ProductModel = require("./models/product");

//Aqui solo hago la conexion con la bd usando lo que se dio en el pdf
const sequelize = new Sequelize("bsale_test", "bsale_test", "bsale_test", {
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

// Aqui le paso a los modelos los parametros de conexion y el data type que permite definir el typo de dato de los campos del modelo
const Category = CategoryModel(sequelize, DataTypes);
const Product = ProductModel(sequelize, DataTypes);

const pruebaConexion = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion con la bd correcta");
  } catch (error) {
    console.error("No se pudo coneectar a la bd:", error);
  }
};

pruebaConexion();

module.exports = {
  Category,
  Product,
};
