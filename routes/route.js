const express = require('express');
const Task = require('../models/data.js')

const  router = express.Router();

router.get('/', async (req, res)=>{
    const allTasks=await Task.find({})
    
    res.render('home', {allTasks})
})

router.get('/edit/:id', async (req, res)=>{
    const id = req.params.id
    const taskToBeEdited = await Task.findById(id)

    res.render('edit', {task: taskToBeEdited})
    
})


router.put('/edited' , async (req, res)=>{
    const id = req.query.id
    console.log("edited"+ id)
    console.log(req.body)
    const updatedTask = await Task.findByIdAndUpdate(id, {task:req.body.task, description:req.body.description})
    res.redirect('/')
})

router.post('/done', async (req, res)=>{
    
    const postedTask = new Task({
        task:req.body.task, 
        description:req.body.description
    })

   await postedTask.save().then((res)=>{
       console.log("Doc saved")
   })
    res.redirect('/')


})

router.delete('/',async (req, res)=>{
    const id = req.query.id
 

    const DeleteTask  = await Task.findByIdAndDelete(id)
    res.redirect('/')
})

module.exports = router