const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task:{type:String, require:true},
    description:{type:String, require:true}

},{timestamps:true})


const Task = mongoose.model('Task', TaskSchema)
module.exports = Task