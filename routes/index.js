const router = require('express').Router();
const apiRoutes = require('./api');

// prefix and batch routes
router.use('/api', apiRoutes);

// 404 route
router.use('/', (req, res) => {
  res.status(404).end();
});

module.exports = router;