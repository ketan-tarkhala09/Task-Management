const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Category = require('./Category');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: DataTypes.STRING,
  dueDate: DataTypes.DATE
});

Task.belongsTo(User, { foreignKey: 'assignedUserId' });
Task.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Task;
