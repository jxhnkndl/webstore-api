const router = require('express').Router();
const { Tag } = require('../../models');

// GET all tags -> /api/tags
router.get('/', async (req, res) => {
  try {
    const dbTagData = await Tag.findAll();

    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET tag by id -> /api/tags/:id
router.get('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.findOne({
      where: { id: req.params.id }
    });

    if (!dbTagData) {
      res.status(404).json({ msg: 'Tag not found' });
      return;
    }

    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST new tag -> /api/tags
router.post('/', async (req, res) => {
  try {
    const dbTagData = await Tag.create(req.body);

    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE tag by id -> /api/tags/:id
router.put('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.update(req.body, {
      where: { id: req.params.id }
    });

    if (!dbTagData) {
      res.status(404).json({ msg: 'Tag not found' });
      return;
    }

    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE tag by id -> /api/tags/:id
router.delete('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.destroy({
      where: { id: req.params.id }
    });

    if (!dbTagData) {
      res.status(404).json({ msg: 'Tag not found' });
      return;
    }

    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;