const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');

// prefix and batch api routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;