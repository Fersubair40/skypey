import React from 'react';


const ChatWindow = ({ activeUserId }) => {
    return(
        <div className='ChatWindow'>
        Conversation with user id: {activeUserId}
        </div>
    );
};


export default ChatWindow;