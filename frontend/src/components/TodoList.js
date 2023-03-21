import React from 'react';
import Todo from './Todo';

import { MdLibraryAdd } from 'react-icons/md';

function TodoList({ todoList, onAdd, onDelete, onEdit }) {
    return (
        <table id="todoList">
            <caption>Add and Edit ToDo-List</caption>
            <thead>
                <span class="add" onClick={() => onAdd(todoList)} >
                    <MdLibraryAdd/> Add
                </span>
                <tr>
                    <th>Edit</th>
                    <th>Priority</th>
                    <th>Task</th>
                    <th>Due</th>
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
