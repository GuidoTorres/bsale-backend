const {Category} = require("../db");
const router = require("express").Router();

// get de todos las categorias
router.get("/", async (req, res) => {
  try {
    const prod = await Category.findAll();
    res.send(prod)
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
