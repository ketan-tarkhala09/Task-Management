const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validator');
const { userSchema } = require('../validators/userValidator');
const userController = require('../controllers/userController');

router.post('/', validate(userSchema), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', validate(userSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
