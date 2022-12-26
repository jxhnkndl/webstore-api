const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');

// prefix and batch api routes
router.use('/categories', categoryRoutes);

module.exports = router;