const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};
    
const createTask = async (request, response) => {
   const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
  };

  const deleteTask = async (request, response) => {

      const { id } = request.params;

      await tasksModel.deleteTask(id);

      return response.status(204).json({message: 'Task deleted'});
  }


  const updateTask = async (request, response) => {

    const { id } = request.params

    await tasksModel.updateTask(id, request.message);

    return response.status(204).json({message: 'Task updated'});

  }

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};