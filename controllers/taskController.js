const Task = require("../models/Task");
const User = require("../models/User");

const createTask = async (req, res, io) => {
  try {
    const user=await User.findByPk(req.body.assignedUserId);
    if(user==null){
       res.status(404).json({error:"user not found at this id"})
       return;
    }
    const task = await Task.create(req.body);
    io.emit("taskCreated", task);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Error creating task" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Error fetching task" });
  }
};

const updateTask = async (req, res, io) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    await task.update(req.body);
    io.emit("taskUpdated", task);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Error updating task" });
  }
};

const deleteTask = async (req, res, io) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    await task.destroy();
    io.emit("taskDeleted", { id: req.params.id }); 
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting task" });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
