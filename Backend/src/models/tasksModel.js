const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0]
};

const createTask = async (task) => {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
  
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
  
    const [createdTask] = await connection.execute(query, [task.title, 'pendente', dateUTC]);
    return {createdTask};
  };

  const deleteTask = async (id) => {

    const query = 'DELETE FROM tasks WHERE id =?';
    const [deletedTask] = await connection.execute(query, [id]);
    return {deletedTask};

  }

  const updateTask = async (id, task) => {

    const { title, status } = task;
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'; 

    const [updatedTask] = await connection.execute(query, [task.title, task.status, id]);
    return {updatedTask};

  }

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};