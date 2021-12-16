const {Category} = require("../db");
const router = require("express").Router();

// get de todos las categorias
router.get("/", async (req, res) => {
  try {

    //obtengo todaas las categorias de la tabla category
    const prod = await Category.findAll();
    //Si todo esta ok mando el status 200 y el json con las categorias
    res.status(200).json(prod)
  } catch (error) {
    //Si no funciono el try devuelvo el error
    res.status(500).json(error);
  }
});

module.exports = router;
