import React from 'react';
import Header from './Header';
import store from '../store'
import Chats from './Chats';
import _ from 'lodash';
import './ChatWindow.css';
import MessageInput from '../containers/MessageInput';



const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    return(
        <div className='ChatWindow'>
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)} />
            <MessageInput/>
        </div>
    );
};


export default ChatWindow;