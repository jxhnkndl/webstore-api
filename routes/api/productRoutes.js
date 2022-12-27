const router = require('express').Router();
const { Product, Category } = require('../../models');

// GET all products -> /api/products
router.get('/', async (req, res) => {});

// GET product by id -> /api/products/:id
router.get('/:id', async (req, res) => {});

// POST new product -> /api/products
router.post('/', async (req, res) => {});

// UPDATE product by id -> /api/products/:id
router.put('/:id', async (req, res) => {});

// DELETE product by id -> /api/products/:id
router.delete('/:id', async (req, res) => {});

module.exports = router;