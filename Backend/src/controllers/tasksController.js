const tasksModels = require('../models/tasksModels');

const getAll = async (req, res) => {
    const tasks = await tasksModels.getAll();
    return res.status(200).json(tasks);
};
    

module.exports = {
    getAll
};