import { api } from './api';

// GET
export const getTasks = async () => {
    try {
        const { data } = await api.get('/tasks');
        console.log.apply(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};

// POST
export const newTask = async (novaTask) => {
    try {
        const task = await api.delete('/tasks' + novaTask);
        return task;
    } catch (e) {
        console.log(e);
    }
};

// PUT
export const updateTask = async (task) => {
    try {
        const updatTask = await api.delete('/tasks/' + task.id);
        return updatTask;
    } catch (e) {
        console.log(e);
    }
};

// DELET
export const deteTask = async (id) => {
    try {
        const deletedTask = await api.delete('/tasks/' + id);
        return deletedTask;
    } catch (e) {
        console.log(e);
    }

};
