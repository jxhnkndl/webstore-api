const router = require('express').Router();
const { Product, Category } = require('../../models');

// GET all products -> /api/products
router.get('/', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name']
        }
      ]
    });

    res.json(dbProductData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET product by id -> /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const dbProductData = await Product.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name']
        }
      ]
    });

    if (!dbProductData) {
      res.status(404).json({ msg: 'Product not found' });
      return;
    }

    res.json(dbProductData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST new product -> /api/products
router.post('/', async (req, res) => {
  try {
    const dbProductData = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id
    });

    res.json(dbProductData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE product by id -> /api/products/:id
router.put('/:id', async (req, res) => {});

// DELETE product by id -> /api/products/:id
router.delete('/:id', async (req, res) => {});

module.exports = router;