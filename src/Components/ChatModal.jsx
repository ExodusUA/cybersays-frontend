import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import io from 'socket.io-client';
import close from '../images/CyberSaysPage/closeMenu.png'
import avatar from '../images/CyberSaysPage/1st.png'
import send from '../images/CyberSaysPage/send.png'

function ChatModal({ user, setOpen }) {

    const socket = io(process.env.REACT_APP_CHAT_URL, {
        query: {
            username: user?.email
        }
    });

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [online, setOnline] = useState(1);

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
        if (message.length === 0) return alert('Please enter a message')
        socket.emit('chat message', [username, message]);
        setMessage('');
    };

    const filterMessages = (messages) => {
        messages.sort((a, b) => a.datetime - b.datetime);
        return messages;
    };

    const chatContainer = useRef(null)

    const scrollToBottom = () => {
        if (chatContainer.current) {
            chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>

                <div className='flex justify-between md:my-4'>
                    <div className='flex items-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#FFED63" fill-opacity="0.2" />
                            <circle cx="7.99922" cy="7.99971" r="4.8" fill="#FFED63" />
                        </svg>
                        <p className='text-[16px] saira font-medium ml-2'>{online} online</p>
                    </div>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>
                <p className=' text-[18px] md:text-[32px] font-semibold text-center mt-3'>Chat Room</p>
                <div className='h-[500px] overflow-y-scroll  duration-300' ref={chatContainer}
                    style={{
                        overflowY: 'auto',
                    }}>
                    {
                        messages.length > 0 ?
                        filterMessages(messages).map((item, index) => (
                            <div className='w-full bg-[#EAEAEA] bg-opacity-10 rounded-[10px] p-5 my-2' key={item}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center max-w-[165px] md:max-w-[325px] w-full mr-4'>
                                        <img className=' rounded-full w-[32px] h-[32px] mr-2' src={avatar} alt="avatar" />
                                        <p className='saira text-[16px] font-semibold truncate'>{item.username}</p>
                                    </div>
                                    <p className='saira text-[16px] font-normal'>{moment.unix((Number(item.datetime))).format('hh:mm A')}</p>
                                </div>
                                <p className='saira text-[12px] md:text-[14px] font-medium'>{item.text}</p>
                            </div>
                        ))
                        : <div className='text-center saira mt-20'>No messages yet</div>
                    }
                </div>
                <div className='border-b-[2px] border-[#FFED63]'></div>
                <div className=' relative mt-5'>
                    <input type="text" placeholder='Your message' className='saira w-full text-[14px] rounded-[50px] py-[10px] px-5 pr-12 outline-none text-black' value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
                        if (e.keyCode === 13) {
                            handleSubmit(e)
                        }
                    }} />
                    <img onClick={e => handleSubmit(e)} className='w-[24px] h-[24px] absolute top-[8px] right-4 cursor-pointer' src={send} alt="send" />
                </div>
            </div>
        </div>
    )
}

export default ChatModal
