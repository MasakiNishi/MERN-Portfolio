import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoList from '../components/TodoList';

function TodoListPage({ setTodo }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [todoList, setTodoList] = useState([]);

    // RETRIEVE the entire list of todo
    const loadTodoList = async () => {
        const response = await fetch('/tasks');
        const todoList = await response.json();
        setTodoList(todoList);
    }

    // UPDATE a single todo
    const onAddTodo = async todo => {
        setTodo(todo);
        redirect("/tasks/add");
    }


    // UPDATE a single todo
    const onEditTodo = async todo => {
        setTodo(todo);
        redirect("/tasks/edit");
    }


    // DELETE a single todo
    const onDeleteTodo = async _id => {
        const response = await fetch(`/tasks/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/tasks');
            const todoList = await getResponse.json();
            setTodoList(todoList);
        } else {
            console.error(`Failed to delete todo with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD todo lists
    useEffect(() => {
        loadTodoList();
    }, []);

    // DISPLAY the todo lists
    return (
        <>
            <h2 className="subpage">ToDo-List</h2>
            <article>
                <p>You can manage your ToDo with due dates and priority.</p>
                <TodoList
                    todoList={todoList}
                    onAdd={onAddTodo} 
                    onEdit={onEditTodo} 
                    onDelete={onDeleteTodo} 
                />
            </article>
        </>
    );
}

export default TodoListPage;
