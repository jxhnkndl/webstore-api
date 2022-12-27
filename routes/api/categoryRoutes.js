const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories -> /api/categories
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });

    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET category by id -> /api/categories/:id
router.get('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });

    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST new category -> /api/categories
router.post('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.create({
      category_name: req.body.category_name,
    });

    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE category by id -> /api/categories/:id
router.put('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!dbCategoryData) {
      res.status(404).json({ msg: 'Category not found' });
      return;
    }

    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE category by id -> /api/categories/:id
router.delete('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.destroy({
      where: { id: req.params.id }
    });

    if (!dbCategoryData) {
      res.status(404).json({ msg: 'Category not found' });
      return;
    }

    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
