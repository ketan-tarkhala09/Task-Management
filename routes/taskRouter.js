const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validator');
const { taskSchema } = require('../validators/taskValidator');
const taskController = require('../controllers/taskController');

module.exports = (io) => {
  router.post('/', validate(taskSchema), (req, res) => taskController.createTask(req, res, io));
  router.get('/', taskController.getAllTasks);
  router.get('/:id', taskController.getTaskById);
  router.put('/:id', validate(taskSchema), (req, res) => taskController.updateTask(req, res, io));
  router.delete('/:id', (req, res) => taskController.deleteTask(req, res, io));

  return router;
};
