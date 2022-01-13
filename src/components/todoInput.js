import React, { useState } from 'react';
import './todoinput.css';

export default function TodoInput({ addItem }) {
    const [input, setInput] = useState('');

    return (
        < div>
            <input className='input' placeholder='Type here to add...' type='text' value={input} onChange={(event) => { setInput(event.target.value) }} />
            <button className='add-btn' onClick={() => {
                addItem(input)
                setInput('');
            }}>Add Item</button>
        </div>
    )
}
