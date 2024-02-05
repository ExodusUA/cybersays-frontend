import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import close from '../images/CyberSaysPage/closeMenu.png';
import send from '../images/CyberSaysPage/send.png';
import GifModal from './GifModal';
import UserMessage from './Messages/UserMessage';
import BotMessage from './Messages/BotMessage';
import { useDesign } from '../Helpers/Design/DesignContext'
import usa_flag from '../images/NewDesign/chatFlag/flag_usa.png'
import int from '../images/NewDesign/chatFlag/flag_int.png'

function ChatModal({ user, setOpen, languageData, userCountry }) {
    const { design } = useDesign()

    const socket = io(process.env.REACT_APP_CHAT_URL, {
        body: {
            userId: 123
        }
    });

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [online, setOnline] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState('int')
    const [countryOpen, setCountryOpen] = useState(false)

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
    const getCountryName = () => {
        const countryPhotos = {
            'int': int,
            'usa': usa_flag,
        };

        const countryName = {
            'int': 'International',
            'usa': 'USA',
        };

        const countryPhoto = countryPhotos[selectedCountry] || int;

        return (
            <p className=' flex justify-between items-center '>
                <img className='w-[17px] h-[16px] lg:mr-2' src={countryPhoto} alt={selectedCountry} /> <span className='saira text-white font-bold text-[12px] hidden lg:block'>{countryName[selectedCountry]}</span> 
            </p>
        );
    };
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md '>
            <div className='max-w-[600px] m-auto p-4 '>

                <div className='flex justify-between items-center md:my-4'>
                    <div className='flex items-center w-[120px]'>
                        {design === '0' ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#FFED63" fill-opacity="0.2" />
                            <circle cx="7.99922" cy="7.99971" r="4.8" fill="#FFED63" />
                        </svg>
                            : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#FFED63" fill-opacity="0.2" />
                                <circle cx="7.99922" cy="7.99971" r="4.8" fill="url(#paint0_linear_1464_400936)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1464_400936" x1="3.19922" y1="8.09383" x2="12.7992" y2="8.09383" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#8FE5EC" />
                                        <stop offset="1" stop-color="#DDBAFC" />
                                    </linearGradient>
                                </defs>
                            </svg>}
                        <p className='text-[16px] saira font-medium ml-2'>{online} {languageData?.chatOnline}</p>
                    </div>
                    <div className=' relative w-full  flex justify-end mr-2'>
                        <div>
                            <button onClick={(e) => {
                                setCountryOpen(!countryOpen)
                                e.stopPropagation()
                            }} className={`${design === '0' ? ' border-[#FFED63]' : 'border-[#A2DBF0]'} bg-[#474747]  border-[2px]  rounded-[50px] flex items-center gap-2 px-[10px] py-[5px] font-Inter max-w-[170px] w-full`}>
                                <p className='text-white font-bold text-[12px] flex justify-between items-center'>
                                    {getCountryName()} <p className='ml-1 '></p>
                                    <svg className={`${countryOpen ? '' : 'rotate-180'} ml-2`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00401 5.19696L2.18601 10.8583C2.13912 10.9049 2.08346 10.9418 2.02224 10.9667C1.96101 10.9917 1.89545 11.0042 1.82934 11.0037C1.76323 11.0031 1.69789 10.9895 1.63709 10.9635C1.57629 10.9375 1.52125 10.8998 1.47514 10.8524C1.42904 10.805 1.39279 10.7489 1.36849 10.6875C1.34419 10.626 1.33233 10.5603 1.33359 10.4942C1.33484 10.4281 1.3492 10.3629 1.37582 10.3024C1.40244 10.2419 1.4408 10.1872 1.48867 10.1416L7.65534 4.14163C7.74868 4.05081 7.87378 4 8.00401 4C8.13424 4 8.25933 4.05081 8.35267 4.14163L14.5193 10.1416C14.5672 10.1872 14.6056 10.2419 14.6322 10.3024C14.6588 10.3629 14.6732 10.4281 14.6744 10.4942C14.6757 10.5603 14.6638 10.626 14.6395 10.6875C14.6152 10.7489 14.579 10.805 14.5329 10.8524C14.4868 10.8998 14.4317 10.9375 14.3709 10.9635C14.3101 10.9895 14.2448 11.0031 14.1787 11.0037C14.1126 11.0042 14.047 10.9917 13.9858 10.9667C13.9246 10.9418 13.8689 10.9049 13.822 10.8583L8.00401 5.19696Z" fill="white" />
                                    </svg>
                                </p>

                            </button>
                        </div>

                        {countryOpen && (
                            <div onClick={(e) => e.stopPropagation()} className={`mt-0 absolute top-[40px] p-4 border-[2px] ${design === '0' ? ' border-[#FFED63]' : 'border-[#A2DBF0]'} bg-[#474747]  rounded-[8px] py-2 inline-block  right-0 w-[150px]`}>
                                <p className='saira text-white text-[12px] font-medium flex items-center my-2 cursor-pointer'
                                    onClick={() => { setSelectedCountry("int"); setCountryOpen(false); }}>
                                    <img className='w-[16px] h-[16px] mr-1' src={int} alt="int" />International</p>

                                {
                                    userCountry === 'US' && <p className='saira text-white text-[12px] font-medium flex items-center my-2 cursor-pointer'
                                        onClick={() => { setSelectedCountry("usa"); setCountryOpen(false); setMessages([]) }}>
                                        <img className='w-[16px] h-[16px] mr-1' src={usa_flag} alt="int" /> USA</p>
                                }



                            </div>
                        )}
                    </div>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <p className=' text-[18px] md:text-[32px] font-semibold text-center mt-3'>{languageData?.chatTitle}</p>
                <div className='h-[66vh] mob2:h-[80vh]  md:h-[77vh] overflow-y-scroll  duration-300 pb-4' ref={chatContainer}
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
                <div className={`border-b-[2px]  ${design === '0' ? 'border-[#FFED63]' : 'border-[#A2DBF0]'}`}></div>
                <div className='flex justify-between items-center mt-2 md:mt-5'>
                    <div className=' relative  w-full'>
                        <input type="text" placeholder='Your message' className={`border-[2px] ${design === '0' ? 'border-[#FFED63] rounded-[50px]' : 'border-[#A2DBF0] rounded-[14px]'} saira w-[98%] text-[14px]  py-[10px] px-5 pr-12 outline-none text-black`} value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
                            if (e.keyCode === 13) {
                                handleSubmit(e)
                            }
                        }} />
                        <svg onClick={e => setGifModal(true)} className='absolute top-[10px] right-4 md:right-6 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V13H15C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" stroke="#1E1E1E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 13V13.172C19.9999 13.7024 19.7891 14.211 19.414 14.586L14.586 19.414C14.211 19.7891 13.7024 19.9999 13.172 20H13" stroke="#1E1E1E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <div onClick={e => handleSubmit(e)} className={`min-w-[44px] h-[44px] border-[2px] ${design === '0' ? 'border-[#FFED63]' : 'border-[#A2DBF0]'} bg-white rounded-full flex justify-center items-center  cursor-pointer`}>
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
