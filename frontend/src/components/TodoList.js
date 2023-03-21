import React from 'react';
import Todo from './Todo';

import { MdLibraryAdd } from 'react-icons/md';

function TodoList({ todoList, onAdd, onDelete, onEdit }) {
    return (
        <table id="todoList">
            <caption>Add and Edit ToDo-List</caption>
            <thead>
                <tr>
                    <th className="add-icon" onClick={() => onAdd(todoList)}><MdLibraryAdd />Add new task</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>Priority</th>
                    <th>Task</th>
                    <th>Due</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todo, i) => 
                    <Todo 
                        todo={todo} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TodoList;
