import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Todo({ todo, onEdit, onDelete }) {
    console.log(todo);
    return (
        <tr>
            <td class="edit-delete-icon"><MdEdit onClick={() => onEdit(todo)} /></td>
            <td>{todo.priority}</td>
            <td>{todo.task}</td>
            <td>{todo.due.slice(0,10)}</td>
            <td class="edit-delete-icon"><MdDeleteForever onClick={() => onDelete(todo._id)} /></td>
        </tr>
    );
}

export default Todo;
