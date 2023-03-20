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
	item:     { type: String, required: true },
	date:     { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema.
const Todo = mongoose.model('Todo', todoListSchema);


// CREATE model *****************************************
const createTodo = async (priority, item, date) => {
    const todo = new Todo({ 
        priority: priority, 
        item: item, 
        date: date
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
const updateTodo = async (_id, priority, item, date) => {
    const result = await Todo.replaceOne({_id: _id }, {
        priority: priority, 
        item: item, 
        date: date
    });
    return { 
        _id: _id, 
        priority: priority, 
        item: item, 
        date: date
    }
}


// DELETE model based on _id  *****************************************
const deleteTodoById = async (_id) => {
    const result = await Todo.deleteOne({_id: _id});
    return result.deletedCount;
};


export { createTodo, retrieveTodo, retrieveTodoByID, updateTodo, deleteTodoById }
