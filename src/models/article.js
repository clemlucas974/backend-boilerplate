'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    label: DataTypes.STRING,
    text: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};