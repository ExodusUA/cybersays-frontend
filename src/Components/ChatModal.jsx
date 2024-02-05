import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import io from 'socket.io-client';
import close from '../images/CyberSaysPage/closeMenu.png'
import avatar from '../images/CyberSaysPage/1st.png'
import send from '../images/CyberSaysPage/send.png'
import GifModal from './GifModal';
import UserMessage from './Messages/UserMessage';
import BotMessage from './Messages/BotMessage';

function ChatModal({ user, setOpen, languageData, userCountry }) {

    const socket = io(process.env.REACT_APP_CHAT_URL, {
        body: {
            userId: 123
        }
    });

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [online, setOnline] = useState(0);

    useEffect(() => {

        socket.on('connect', () => {
            socket.emit('setUserOnline', { userId: user.id, socketId: socket.id })
        });

        if (userCountry === undefined) return


        /* GET MESSAGES */

        socket.emit('getMessages', userCountry)

        socket.on('messages', (history) => {
            if (history.length === undefined) return
            setMessages(history);
        });

        /* ONLINE */

        socket.on('onlineCount', (count) => {
            console.log('onlineCount', count)
            setOnline(count);
        });

        socket.on('newMessage', (msg) => {
            console.log('newMessage', msg)
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, [userCountry]);

    let username = user?.email

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.length === 0) return alert('Please enter a message')
        socket.emit('addMessage', {
            message: message,
            name: username,
            userid: user.id,
            country: userCountry,
            token: '',
        });
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

    const handleSubmitGif = (gif) => {
        socket.emit('addMessage', {
            message: `<img class="w-full rounded-[20px] mt-2" src="${gif}" alt="gif" />`,
            name: username,
            userid: user.id,
            country: userCountry,
            token: '',
        });
        setGifModal(false)
    }

    const [gifModal, setGifModal] = useState(false);

    const getMessageComponent = (message, index) => {
        switch (message.type) {
            case 'user': return <UserMessage message={message} owner={message.name === user.email} index={index} />
            case 'bot': return <BotMessage message={message} index={index} />
            default: return <UserMessage message={message} owner={message.name === user.email} index={index} />
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md '>
            <div className='max-w-[600px] m-auto p-4 '>

                <div className='flex justify-between md:my-4'>
                    <div className='flex items-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#FFED63" fill-opacity="0.2" />
                            <circle cx="7.99922" cy="7.99971" r="4.8" fill="#FFED63" />
                        </svg>
                        <p className='text-[16px] saira font-medium ml-2'>{online} {languageData?.chatOnline}</p>
                    </div>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>
                <p className=' text-[18px] md:text-[32px] font-semibold text-center mt-3'>{languageData?.chatTitle}</p>
                <div className='h-[500px] overflow-y-scroll  duration-300 pb-4' ref={chatContainer}
                    style={{
                        overflowY: 'auto',
                    }}>
                    {
                        messages.length > 0 ?
                            filterMessages(messages).map((item, index) => (
                                getMessageComponent(item, index)
                            ))
                            : <div className='text-center saira mt-20'>{languageData?.chatNotMessages}</div>
                    }

                </div>
                <div className='border-b-[2px] border-[#FFED63]'></div>
                <div className='flex justify-between items-center mt-2 md:mt-5'>
                    <div className=' relative  w-full'>
                        <input type="text" placeholder='Your message' className='  border-[2px] border-[#FFED63] saira w-[98%] text-[14px] rounded-[50px] py-[10px] px-5 pr-12 outline-none text-black' value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
                            if (e.keyCode === 13) {
                                handleSubmit(e)
                            }
                        }} />
                        <svg onClick={e => setGifModal(true)} className='absolute top-[10px] right-4 md:right-6 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V13H15C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" stroke="#1E1E1E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 13V13.172C19.9999 13.7024 19.7891 14.211 19.414 14.586L14.586 19.414C14.211 19.7891 13.7024 19.9999 13.172 20H13" stroke="#1E1E1E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <div onClick={e => handleSubmit(e)} className=' min-w-[44px] h-[44px] border-[2px] border-[#FFED63] bg-white rounded-full flex justify-center items-center  cursor-pointer'>
                        <img className='w-[24px] h-[24px]  cursor-pointer  ' src={send} alt="send" />
                    </div>

                </div>

            </div>
            {
                gifModal && <GifModal languageData={languageData} setGifModal={setGifModal} handleSubmitGif={handleSubmitGif} />
            }
        </div>
    )
}

export default ChatModal
