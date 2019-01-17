import React from 'react';
import store from '../store';
import { setTypingValue } from "../actions";
import './MessageInput.css'







const MessageInput = ( {value} ) => {
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };
    return(
        <form className='Message'>
            <input
                className='Message_input'
                onChange={handleChange}
                value={value}
                placeholder='Write a message'
            />
        </form>
    );
};




export default MessageInput;