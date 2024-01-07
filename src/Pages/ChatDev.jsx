import moment from 'moment';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import user from '../Requests/user';

const ChatDev = ({ user }) => {

    const socket = io(process.env.REACT_APP_CHAT_URL, {
        query: {
            username: user?.email
        }
    });

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [online, setOnline] = useState(0);

    useEffect(() => {

        socket.on('user count', (count) => {
            setOnline(count);
        });

        socket.on('chat message', (msg) => {
            console.log(msg)
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        socket.on('chat history', (history) => {
            console.log(history)
            if (history.length === undefined) return
            setMessages(history);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    let username = user?.email

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('chat message', [username, message]);
        setMessage('');
    };

    const filterMessages = (messages) => {
        messages.sort((a, b) => a.datetime - b.datetime);
        return messages;
    };

    return (
        <div>
            <ul>
                {filterMessages(messages).map((msg, index) => (
                    <li className='text-black' key={index}>{msg.text}, time: {moment.unix((Number(msg.datetime))).format('DD MMMM, YYYY, hh:mm A')}</li>
                ))}
            </ul>
            <p className='text-black'>Online users: {online}</p>
            <form onSubmit={handleSubmit} className='grid'>
                <input
                    className='border-black border-2 min-h-[300px] w-[600px] m-auto mb-12 text-black'
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className='text-black bg-red-300' type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default ChatDev;