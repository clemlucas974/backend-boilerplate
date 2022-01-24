'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'product',
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      description: DataTypes.TEXT,
      image_url: DataTypes.STRING,
    },
    {
      modelName: 'products',
      underscored: true,
    }
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
