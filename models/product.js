//definicion del modelo product
//el module.exports permite que se puede importar en otros archivos
module.exports = (sequelize, type) => {
  return sequelize.define(
    "product",
    {
      //defino los campos de la tabla

      name: type.STRING,
      url_image: type.STRING,
      price: type.FLOAT,
      discount: type.INTEGER,
      category: type.INTEGER,
    },
    //Defino el nombre de ala tabla ya que sino lo pone en plural y no funcionan las busquedas
    //y el timestamp tiene que ver con la fecha de creacion de la tabla pero no tiene ese campo se desactiva

    {
      tableName: "product",
      timestamp: false,
    }
  );
};
