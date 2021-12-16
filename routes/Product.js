const { Product } = require("../db");
const router = require("express").Router();

//get de todos los productos
router.get("/", async (req, res) => {
  //aca obtengo los parametros pasados por la ruta del api
  const { asc, desc, disc, page, limit } = req.query;

  //starindex y endIndex son para obtener la pagina y el limite pasado por parametros
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    //en prod obtengo todos los elemtos que hay en la tabla Products y la cantidad
    //de los mismos
    const prod = await Product.findAndCountAll({
      
      limit: parseInt(endIndex),
      offset: parseInt(startIndex),

      //para poder ordenar o filtrar los elemtos uso order

      //y depediendo los parametros que pase por la ruta se ordena
      // dependiendo de si los parametros asc, desc o disc tienen un valor 
      //se ordernan los elementos sino se devuelve sin filtrar
      order: asc
        ? [["price", "ASC"]]
        : desc
        ? [["price", "DESC"]]
        : disc
        ? [["discount", "DESC"]]
        : null,
    });

    const cantidad = prod.count - parseInt(limit);
    const paginas = Math.ceil(prod.count / parseInt(limit));

    // Si todo salio bien se manda un status 200 y en un json los productos
    res.status(200).json(
      prod
      //   {
      //   total: prod.count,
      //   // paginas: paginas,
      //   restante: cantidad,
      //   data: prod.rows,
      // }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

// busqueda de productos
router.get("/search", async (req, res) => {
  const { term, asc, desc, disc } = req.query;

  try {
    //Obtengo todos los productos y se ordena si es que se pasa un parametro por la api
    const prod = await Product.findAll({
      order: asc
        ? [["price", "ASC"]]
        : desc
        ? [["price", "DESC"]]
        : disc
        ? [["discount", "DESC"]]
        : null,
    });
    //una vez obtenidos los productos uso el metodo filter y lo que hago es verificar si en el nombre de algun producto
    // se incluye el parametro term si es asi me devuelve un nuevo array con los elementos sino no se devuelve nada
    const filter = prod.filter((data, index) =>
      data.name.toLowerCase().includes(term.toLowerCase())
    );

    //mando el status de todo ok y los porductos que coinciden con la busqueda
    res.status(200).json(filter);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get por categoria 1, 2, 3 , etc
router.get("/:id", async (req, res) => {

  // el categoryId es el parametro que se pasa en la ruta products/id el id vendria a ser la categoria
  const categoryId = req.params.id;
  const { asc, desc, disc } = req.query;
  try {
    //aca igual que en los otros metodos obtengo toda la data, pero filtro por categorias
    //usando where entonces si la categoryID es 1 me devolveria solo las bebidas energeticas
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
