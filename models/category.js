
//definicion del modelo category
module.exports = (sequelize, type) => {
  //defino los modelos para poder usar el orm sequelize
  return sequelize.define(
    "category",
    {
      //defino el unico campo a usar en la tabla
      name: type.STRING,
    },
    //Defino el nombre de ala tabla ya que sino lo pone en plural y no funcionan las busquedas
    //y el timestamp tiene que ver con la fecha de creacion de la tabla pero no tiene ese campo se desactiva
    {
      tableName: "category",
      timestamp: false
    }
  );
};
