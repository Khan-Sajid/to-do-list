import React, { useState } from 'react'
import TodoInput from './todoInput';
import './todolist.css';
import TodoItem from "./todoItem";

export default function Todolist() {
    const [tasks, setTasks] = useState([]);

    function addItem(task) {
        let newTasks = [...tasks, task];
        setTasks(newTasks);
    }

    function deleteItem(index) {
        tasks[index] = '';
        let newTasks = tasks.filter((el) => el !== '');
        setTasks(newTasks);
    }

    function updateTask(index, updatedTask) {
        tasks[index] = updatedTask;
        setTasks([...tasks]);
    }
    return (
        <div className='container'>
            <TodoInput addItem={addItem} />
            {tasks.map((task, index) => {
                return <div className='task' key={(task + index)}>
                    <TodoItem deleteItem={deleteItem} task={task} index={index} updateTask={updateTask} />
                </div>
            })}
            <button className='clr-btn' onClick={() => (setTasks([]))}>Clear Items</button>
        </div>
    )
}
