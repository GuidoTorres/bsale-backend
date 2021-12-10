const { Product } = require("../db");
const router = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//get de todos los productos
router.get("/", async (req, res) => {
  try {
    const prod = await Product.findAll();
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json(error);
  }
});

// busqueda de productos
router.get("/search", async (req, res) => {
  const { term } = req.query;
  try {
    const prod = await Product.findAll();
    const filter = prod.filter((data, index) =>
      data.name.toLowerCase().includes(term.toLocaleLowerCase())
    );
    res.status(200).json(filter);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get por categoria
router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const prod = await Product.findAll({
      where: {
        category: categoryId,
      },
    });
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
