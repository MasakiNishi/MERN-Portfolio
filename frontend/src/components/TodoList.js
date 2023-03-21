import React from 'react';
import Todo from './Todo';

import { MdLibraryAdd } from 'react-icons/md';

function TodoList({ todoList, onDelete, onEdit }) {
    return (
        <table id="todoList">
            <caption>Add and Edit Todo-List</caption>
            <p><MdLibraryAdd onClick={() => onEdit(todoList)} /> Add </p>
            <thead>
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
