import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditTodoPage = ({ todoToEdit }) => {

    const [priority, setPriority] = useState(todoToEdit.priority);
    const [task, setTask]         = useState(todoToEdit.task);
    const [due, setDue]           = useState(todoToEdit.due);
    
    const redirect = useNavigate();

    const editTodo = async () => {
        const response = await fetch(`/tasks/${todoToEdit._id}`, {
            method: 'put',
            body: JSON.stringify({
                priority: priority, 
                task: task, 
                due: due
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 200){
            alert(`todo updated`);
            redirect("/tasks");
        } else {
            alert(`todo not updated status code = ${response.status}`);
            redirect("/tasks");
        }
    };


    return (
        <>
        <article>
            <h2>Update ToDo</h2>
            <p>You can edit the priority, task and due dates.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What is your current task?</legend>
                    <label for="priority">Priority</label>
                    <input
                        type="number"
                        placeholder="1"
                        value={priority}
                        onChange={e => setPriority(e.target.value)} 
                        id="priority" />
                    
                    <label for="task">Task</label>
                    <input
                        type="text"
                        value={task}
                        placeholder="Do assignment"
                        onChange={e => setTask(e.target.value)} 
                        id="task" />

                    <label for="due">Due</label>
                    <input
                        type="date"
                        placeholder="Due dates of the task"
                        value={due.slice(0,10)}
                        onChange={e => setDue(e.target.value)} 
                        id="due" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={editTodo}
                        id="submit"
                    >Save</button> updates to the ToDo-List</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditTodoPage;
