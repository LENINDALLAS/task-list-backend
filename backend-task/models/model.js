import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    completed_at: {
        type: String || null,
    },
    title: {
        type: String,
        default: "Task list"
    }
},
    {
        timestamps: true
    });


const Task = mongoose.model("Task", taskSchema);
export default Task
