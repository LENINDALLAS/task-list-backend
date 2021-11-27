import express from 'express';
import { getAllTask, createTask, updateTask, taskCompleted, taskUncompleted, deleteTask } from './controller/controllers.js';

const router = express.Router();

router.route('/tasks').get(getAllTask).post(createTask);

router.route('/tasks/:taskId').put(updateTask).delete(deleteTask);

router.route('/tasks/:taskId/completed').put(taskCompleted);

router.route('/tasks/:taskId/uncompleted').put(taskUncompleted);


export default router;