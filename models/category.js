
//definicion del modelo category
module.exports = (sequelize, type) => {
  return sequelize.define(
    "category",
    {
      name: type.STRING,
    },
    {
      tableName: "category",
      timestamp: false
    }
  );
};
