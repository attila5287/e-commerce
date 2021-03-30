const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const cat = await Category.findAll({include: {all:true}});

  return res.json(cat);

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  const cat = await Category.findByPk(req.params.id, {include: { all : true }});

  return res.json(cat);
});

router.post('/', async (req, res) => {
  // create a new category
  const cat = await Category.create(req.body);

  return res.json(cat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  const cat = await Category.update(req.body, { 
    where : {
      id : req.params.id,
    },
  })

  return res.json(cat);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const cat = await Category.destroy({
    where : {
      id : req.params.id
    }
  })

  return res.json(cat);
});

module.exports = router;
