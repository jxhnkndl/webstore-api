const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');

/**
 *  PRODUCT <-> CATEGORY ASSOCIATIONS
 */

// product can only have one category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// category can have many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

module.exports = { Category, Product, Tag };
