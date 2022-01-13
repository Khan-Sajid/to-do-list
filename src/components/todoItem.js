import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiEdit } from "react-icons/bi";
import "./todoitem.css";

export default function TodoItem({ deleteItem, index, task, updateTask }) {
    const [bool, setBool] = useState(false);
    const [textInput, setTextInput] = useState(task);

    return (
        <div className='item'>
            {bool
                ? <>
                    <textarea className='textarea' value={textInput} onChange={(event) => { setTextInput(event.target.value) }} ></textarea>
                </>
                : <div>
                    <p className='task'>{task}</p>
                </div>}
            <div className='icons'>
                <AiOutlineCheckCircle style={{ color: "green" }} onClick={() => {
                    updateTask(index, textInput);
                    setBool(false)
                }} />
                <BiEdit style={{ color: "blue" }} onClick={() => { setBool(true) }} />
                <AiOutlineCloseCircle style={{ color: "red" }} onClick={() => { deleteItem(index) }} />
            </div>


        </div>
    )
}
