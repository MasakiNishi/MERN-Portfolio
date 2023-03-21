import 'dotenv/config';
import express from 'express';
import * as todoList from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
app.post ('/tasks', (req,res) => { 
    todoList.createTodo(
        req.body.priority, 
        req.body.task, 
        req.body.date
        )
        .then(todo => {
            res.status(201).json(todo);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a todo failed. try it again later.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/tasks', (req, res) => {
    todoList.retrieveTodo()
        .then(todo => { 
            if (todo !== null) {
                res.json(todo);
            } else {
                res.status(404).json({ Error: 'todo not found. add a new todo to view.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve todo failed. try it again later.' });
        });
});


// RETRIEVE by ID controller
app.get('/tasks/:_id', (req, res) => {
    todoList.retrieveTodoByID(req.params._id)
    .then(todo => { 
        if (todo !== null) {
            res.json(todo);
        } else {
            res.status(404).json({ Error: 'the todo not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve the todo failed' });
    });

});


// UPDATE controller ************************************
app.put('/tasks/:_id', (req, res) => {
    todoList.updateTodo(
        req.params._id, 
        req.body.priority, 
        req.body.task, 
        req.body.date
    )
    .then(todo => {
        res.json(todo);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'the todo update failed' });
    });
});


// DELETE Controller ******************************
app.delete('/tasks/:_id', (req, res) => {
    todoList.deleteTodoById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'the todo no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ error: 'delete the todo failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
