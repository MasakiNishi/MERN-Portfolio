import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm the database connection.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB todoList collection.');
    }
});

// Define the collection's schema.
const todoListSchema = mongoose.Schema({
    priority: { type: Number, required: true, min: 0},
	task:     { type: String, required: true },
	due:     { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema.
const Todo = mongoose.model('Todo', todoListSchema);


// CREATE model *****************************************
const createTodo = async (priority, task, due) => {
    const todo = new Todo({ 
        priority: priority, 
        task: task, 
        due: due
    });
    return todo.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveTodo = async () => {
    const query = Todo.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTodoByID = async (_id) => {
    const query = Todo.findById({_id: _id});
    return query.exec();
}


// UPDATE model *****************************************************
const updateTodo = async (_id, priority, task, due) => {
    const result = await Todo.replaceOne({_id: _id }, {
        priority: priority, 
        task: task, 
        due: due
    });
    return { 
        _id: _id, 
        priority: priority, 
        task: task, 
        due: due
    }
}


// DELETE model based on _id  *****************************************
const deleteTodoById = async (_id) => {
    const result = await Todo.deleteOne({_id: _id});
    return result.deletedCount;
};


export { createTodo, retrieveTodo, retrieveTodoByID, updateTodo, deleteTodoById }
