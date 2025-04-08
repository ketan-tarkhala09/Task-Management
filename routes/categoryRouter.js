const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validator');
const { categorySchema } = require('../validators/categoryValidator');
const categoryController = require('../controllers/categoryController');

router.post('/', validate(categorySchema), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', validate(categorySchema), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
