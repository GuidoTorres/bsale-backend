const { Product } = require("../db");
const router = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//get de todos los productos
router.get("/", async (req, res) => {
  const { asc, desc, disc } = req.query;
  try {
    // const page = parseInt(req.query.page);
    // const limit = parseInt(req.query.limit);

    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    // const results = {};

    // if (endIndex < prod.length) results.next = { page: page + 1, limit: limit };
    // if (startIndex > 0) results.previous = { page: page - 1, limit: limit };

    // results.results = prod.slice(startIndex, endIndex);
    const prod = await Product.findAll({
      order: asc
        ? [["price", "ASC"]]
        : desc
        ? [["price", "DESC"]]
        : disc
        ? [["discount", "DESC"]]
        : null,
    });

    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json(error);
  }
});

// busqueda de productos 
router.get("/search", async (req, res) => {
  const { term, asc, desc, disc } = req.query;

  try {
    const prod = await Product.findAll({
      order: asc
        ? [["price", "ASC"]]
        : desc
        ? [["price", "DESC"]]
        : disc
        ? [["discount", "DESC"]]
        : null,
    });
    const filter = prod.filter((data, index) =>
      data.name.toLowerCase().includes(term.toLocaleLowerCase())
    );
    res.status(200).json(filter);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get por categoria 1, 2, 3 , etc
router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;
  const { asc, desc, disc } = req.query;
  try {
    const prod = await Product.findAll({
      where: {
        category: categoryId,
      },
      order:
        asc !== undefined
          ? [["price", "ASC"]]
          : desc !== undefined
          ? [["price", "DESC"]]
          : disc !== undefined
          ? [["discount", "DESC"]]
          : null,
    });

    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
