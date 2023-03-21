import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Todo({ todo, onEdit, onDelete }) {
    return (
        <tr>
            <td><MdEdit onClick={() => onEdit(todo)} /></td>
            <td>{todo.priority}</td>
            <td>{todo.task}</td>
            <td>{todo.due.slice(0,10)}</td>
            <td><MdDeleteForever onClick={() => onDelete(todo._id)} /></td>
        </tr>
    );
}

export default Todo;
