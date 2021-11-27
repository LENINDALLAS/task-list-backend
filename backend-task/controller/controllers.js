import { response } from "express";
import Task from "../models/model.js";


export const getAllTask = async (req, res) => {
    const data = await Task.find();
    res.status(200).send({ message: "success", data: data });
};

export const createTask = async (req, res) => {
    const usertask = new Task({
        description: req.body.description,
        user_id: req.body.user_id,
        completed_at: req.body.completed_at ? new Date() : null,
    });
    // console.log(usertask)

    const data = await usertask.save();
    res.status(200).send({ message: "success", data: data })
}

export const updateTask = async (req, res) => {
    // console.log(task, 'id', req.params.taskId);
    const data = await Task.updateOne({ _id: req.params.taskId }, { description: req.body.description });
    res.status(200).send({ message: "success", data: data });
}


export const taskCompleted = async (req, res) => {
    const data = await Task.findOneAndUpdate({ _id: req.params.taskId }, { completed_at: req.body.completed_at }, { returnOriginal: false });
    res.status(200).send({ message: "success", data: data });
}

export const taskUncompleted = async (req, res) => {
    const data = await Task.findOneAndUpdate({ _id: req.params.taskId }, { completed_at: null }, { returnOriginal: false });
    res.status(200).send({ message: "success", data: data });
}

export const deleteTask = async (req, res) => {
    const data = await Task.deleteOne({ _id: req.params.taskId });
    res.status(200).send({ message: "success", data: data })
}