const router = require('express').Router();
const {Category} = require('../../models');

// GET all categories -> /api/categories
router.get('/', (req, res) => {});

// GET category by id -> /api/categories/:id
router.get('/:id', (req, res) => {});

// POST new category -> /api/categories
router.post('/', (req, res) => {});

// UPDATE category by id -> /api/categories/:id
router.put('/:id', (req, res) => {});

// DELETE category by id -> /api/categories/:id
router.delete('/:id', (req, res) => {});

module.exports = router;