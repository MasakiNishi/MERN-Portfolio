import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddTodoPage = () => {

    const [priority, setPriority] = useState('');
    const [task, setTask]         = useState('');
    const [due, setDue]           = useState('');
    
    const redirect = useNavigate();

    const addTodo = async () => {
        const newTodo = { priority, task, due };

        const response = await fetch('/tasks', {
            method: 'post',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert(`todo added`);
            redirect("/tasks");
        } else {
            alert(`todo not added status code = ${response.status}`);
            redirect("/tasks");
        }
    };


    return (
        <>
        <article>
            <h2 className="subpage">Add ToDo</h2>
            <p>You can add your ToDo and set due dates and priority.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What is your current task?</legend>
                    <label for="priority">Priority (1 to 10)</label>
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
                        value={due}
                        onChange={e => setDue(e.target.value)} 
                        id="due" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addTodo}
                        id="submit"
                    >Add</button> to the ToDo-List</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddTodoPage;
