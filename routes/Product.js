const {Product} = require("../db");
const router = require("express").Router();

//get de todos los productos
router.get("/", async (req, res) => {
  try {
    const prod = await Product.findAll();
    res.send(prod)
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
