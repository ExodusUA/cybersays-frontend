import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import hero from '../../../images/NewDesign/influencerHero.png'

function Influencer({ user, setOpen, languageData }) {

    const { design } = useDesign()

    const [isDone, setIsDone] = useState(false)

    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [message, setMessage] = useState(null)
    const [socialOpen, setSocialOpen] = useState(false)
    const [who, setWho] = useState(null)
    const [nickname, setNickname] = useState(null)
    const [instagram, setInstagram] = useState(false)
    const [facebook, setFacebook] = useState(false)
    const [twitter, setTwitter] = useState(false)
    const [tiktok, setTiktok] = useState(false)
    const [optionInstagram, setOptionInstagram] = useState(0);
    const [optionFacebook, setOptionFacebook] = useState(0);
    const [optionTwitter, setOptionTwitter] = useState(0);
    const [optionTiktok, setOptionTiktok] = useState(0);
    const [optionWho, setOptionWho] = useState(0);
    const [userCountry, setUserCountry] = useState(null);
    const [phone, setPhone] = useState('');

    const selectedWho = [
        {
            option: languageData?.InfluencerWhoOption1,
        },
        {
            option: languageData?.InfluencerWhoOption2,
        },
        {
            option: languageData?.InfluencerWhoOption3,
        },
        {
            option: languageData?.InfluencerWhoOption4,
        },
        {
            option: languageData?.InfluencerWhoOption5,
        },
        {
            option: languageData?.InfluencerWhoOption6,
        }
    ]
    const selectedInstagram = [
        {
            option: '0 - 5k',
        },
        {
            option: '5k - 10k',
        },
        {
            option: '10k - 30k',
        },
        {
            option: '30k - 50k',
        },
        {
            option: '50k - 70k',
        },
        {
            option: '70k - 100k',
        },
        {
            option: '100k+',
        }
    ]
    const selectedFacebook = [
        {
            option: '0 - 5k',
        },
        {
            option: '5k - 10k',
        },
        {
            option: '10k - 30k',
        },
        {
            option: '30k - 50k',
        },
        {
            option: '50k - 70k',
        },
        {
            option: '70k - 100k',
        },
        {
            option: '100k+',
        }
    ]
    const selectedTwitter = [
        {
            option: '0 - 5k',
        },
        {
            option: '5k - 10k',
        },
        {
            option: '10k - 30k',
        },
        {
            option: '30k - 50k',
        },
        {
            option: '50k - 70k',
        },
        {
            option: '70k - 100k',
        },
        {
            option: '100k+',
        }
    ]
    const selectedTikTok = [
        {
            option: '0 - 5k',
        },
        {
            option: '5k - 10k',
        },
        {
            option: '10k - 30k',
        },
        {
            option: '30k - 50k',
        },
        {
            option: '50k - 70k',
        },
        {
            option: '70k - 100k',
        },
        {
            option: '100k+',
        }
    ]
    const handleSend = async () => {

        if (email === null || name === null || message === null) return alert('Please fill all the fields')

        let data = {
            email: email,
            name: name,
            message: message,
            phone: phone,
            nickname: nickname,
            role: optionWho,
            instagram: optionInstagram,
            facebook: optionFacebook,
            twitter: optionTwitter,
            tiktok: optionTiktok
        }

        const res = await userAPI.messageCollaborate(email, data)

        if (res.status === 200) {
            setIsDone(true)
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                {
                    isDone === false
                        ? <div className='h-screen overflow-y-auto pb-[100px] (menuScroll)'>
                            <>
                                <h1 className='text-[18px] lg:text-[32px] text-white text-center  font-semibold'>{languageData?.InfluencerTitle}</h1>
                                <p className='saira text-[14px] font-medium text-center gradient-linkDouble leading-4'>{languageData?.InfluencerSubTitle} </p>
                                <img className='w-full my-2' src={hero} alt="hero" />
                                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput1}</p>
                                <div className='flex justify-center'>
                                    <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={languageData?.InfluencerInput1} />
                                </div>
                                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInputPhone}</p>
                                <PhoneInput
                                    className="w-full  max-w-[600px] text-[16px] saira font-semibold  text-black outline-none rounded-[12px]"
                                    style={{ width: '100%', padding: '5px', backgroundColor: '#F5F5F5' }}
                                    defaultCountry={userCountry}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                />

                                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput2}</p>
                                <div className='flex justify-center'>
                                    <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={name} onChange={e => setName(e.target.value)} placeholder={languageData?.InfluencerInput2} />
                                </div>
                                <div>
                                    <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerWho}</p>
                                    <div className={` bg-white px-3 py-2 lg:py-3 mt-1 border ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                                        <div onClick={e => setWho(!who)} className={`flex  items-center justify-between cursor-pointer`}>
                                            <div className='flex items-center' >
                                                <p className='saira text-[16px] font-normal text-[#1E1E1E]'>{optionWho || languageData?.InfluencerWhoSelect}</p>
                                            </div>
                                            <div className='ml-2'>
                                                {
                                                    who
                                                        ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    {
                                        who && <>
                                            <div className={`bg-white px-3 py-2 lg:py-3 mt-2 border ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                                                {
                                                    selectedWho.map((item, index) => (
                                                        <div key={index} className='flex items-center gap-1'>
                                                            <label className="checkbox-container flex items-center ml-2">
                                                                <input id={item.option} name={item.option} value={item.option} checked={optionWho === item.option} onChange={e => {
                                                                    setOptionWho(item.option)
                                                                    setWho(false)
                                                                }} type="checkbox" />
                                                                <span className="checkmark"></span>
                                                                <p htmlFor={item.option} className='text-[#1E1E1E] saira text-[16px] font-normal'>{item.option}</p>
                                                            </label>
                                                        </div>

                                                    ))
                                                }

                                            </div>
                                        </>
                                    }
                                </div>
                                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerNickname}</p>
                                <div className='flex justify-center'>
                                    <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder={languageData?.InfluencerNickname} />
                                </div>
                                <div>
                                    <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerFollowers}</p>
                                    <div className={` bg-white px-3 py-2 lg:py-3 mt-1 border ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                                        <div onClick={e => setSocialOpen(!socialOpen)} className={`flex  items-center justify-between cursor-pointer`}>
                                            <div className='flex items-center' >
                                                <p className='saira text-[16px] font-normal text-[#1E1E1E]'>{ languageData?.InfluencerFollowers}</p>
                                            </div>
                                            <div className='ml-2'>
                                                {
                                                    socialOpen
                                                        ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    {
                                        socialOpen && <>
                                            <div className='mt-2'>
                                                <div className={`bg-white px-3 py-2 lg:py-3 mt-2 border ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                                                    <div onClick={e => setInstagram(!instagram)} className={`flex  items-center justify-between cursor-pointer`}>
                                                        <div className='flex items-center' >
                                                            <p className='saira text-[16px] font-normal text-[#1E1E1E]'>Instagram</p>
                                                        </div>
                                                        <div className='ml-2'>
                                                            {
                                                                instagram
                                                                    ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                                        <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/*INSTAGRAM*/}
                                                    {
                                                        instagram && <>
                                                            <div className='mt-2'>
                                                                {
                                                                    selectedInstagram.map((item, index) => (
                                                                        <div key={index} className='flex items-center gap-1'>
                                                                            <label className="checkbox-container flex items-center ml-2">
                                                                                <input id={item.option} name={item.option} value={item.option} checked={optionInstagram === item.option} onChange={e => {
                                                                                    setOptionInstagram(item.option)
                                                                                    setInstagram(false)
                                                                                }} type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                                <p htmlFor={item.option} className='text-[#1E1E1E] saira text-[16px] font-normal'>{item.option}</p>
                                                                            </label>
                                                                        </div>

                                                                    ))
                                                                }

                                                            </div>
                                                        </>
                                                    }
                                                    {/*INSTAGRAM*/}
                                                    <div onClick={e => setFacebook(!facebook)} className={`flex  items-center justify-between cursor-pointer mt-2`}>
                                                        <div className='flex items-center' >
                                                            <p className='saira text-[16px] font-normal text-[#1E1E1E]'>Facebook</p>
                                                        </div>
                                                        <div className='ml-2'>
                                                            {
                                                                facebook
                                                                    ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                                        <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/*FACEBOOK*/}
                                                    {

                                                        facebook && <>
                                                            <div className='mt-2'>
                                                                {
                                                                    selectedFacebook.map((item, index) => (
                                                                        <div key={index} className='flex items-center gap-1'>
                                                                            <label className="checkbox-container flex items-center ml-2">
                                                                                <input id={item.option} name={item.option} value={item.option} checked={optionFacebook === item.option} onChange={e => {
                                                                                    setOptionFacebook(item.option)
                                                                                    setFacebook(false)
                                                                                }} type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                                <p htmlFor={item.option} className='text-[#1E1E1E] saira text-[16px] font-normal'>{item.option}</p>
                                                                            </label>
                                                                        </div>

                                                                    ))
                                                                }

                                                            </div>
                                                        </>
                                                    }
                                                    {/*FACEBOOK*/}
                                                    <div onClick={e => setTwitter(!twitter)} className={`flex  items-center justify-between cursor-pointer mt-2`}>
                                                        <div className='flex items-center' >
                                                            <p className='saira text-[16px] font-normal text-[#1E1E1E]'>X</p>
                                                        </div>
                                                        <div className='ml-2'>
                                                            {
                                                                twitter
                                                                    ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                                        <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/*TWITTER*/}
                                                    {

                                                        twitter && <>
                                                            <div className='mt-2'>
                                                                {
                                                                    selectedTwitter.map((item, index) => (
                                                                        <div key={index} className='flex items-center gap-1'>
                                                                            <label className="checkbox-container flex items-center ml-2">
                                                                                <input id={item.option} name={item.option} value={item.option} checked={optionTwitter === item.option} onChange={e => {
                                                                                    setOptionTwitter(item.option)
                                                                                    setTwitter(false)
                                                                                }} type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                                <p htmlFor={item.option} className='text-[#1E1E1E] saira text-[16px] font-normal'>{item.option}</p>
                                                                            </label>
                                                                        </div>

                                                                    ))
                                                                }

                                                            </div>
                                                        </>
                                                    }
                                                    {/*TWITTER*/}
                                                    <div onClick={e => setTiktok(!tiktok)} className={`flex  items-center justify-between cursor-pointer mt-2`}>
                                                        <div className='flex items-center' >
                                                            <p className='saira text-[16px] font-normal text-[#1E1E1E]'>TikTok</p>
                                                        </div>
                                                        <div className='ml-2'>
                                                            {
                                                                tiktok
                                                                    ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                                        <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                            }
                                                        </div>
                                                    </div>
                                                    {/*TIKTOK*/}
                                                    {

                                                        tiktok && <>
                                                            <div className='mt-2'>
                                                                {
                                                                    selectedTikTok.map((item, index) => (
                                                                        <div key={index} className='flex items-center gap-1'>
                                                                            <label className="checkbox-container flex items-center ml-2">
                                                                                <input id={item.option} name={item.option} value={item.option} checked={optionTiktok === item.option} onChange={e => {
                                                                                    setOptionTiktok(item.option)
                                                                                    setTiktok(false)
                                                                                }} type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                                <p htmlFor={item.option} className='text-[#1E1E1E] saira text-[16px] font-normal'>{item.option}</p>
                                                                            </label>
                                                                        </div>

                                                                    ))
                                                                }

                                                            </div>
                                                        </>
                                                    }
                                                    {/*TIKTOK*/}
                                                </div>

                                            </div>
                                        </>
                                    }
                                </div>
                                <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput3}</p>
                                <div className='flex justify-center'>
                                    <textarea className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none h-[100px] resize-none ${design === '0' ? '  rounded-[12px]' : ' rounded-[12px] '}`} type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder={languageData?.InfluencerInput3} />
                                </div>
                                <div className='flex justify-center mt-4'>
                                    <button onClick={e => handleSend()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.InfluencerBtn}</button>
                                </div>
                            </>
                        </div>
                        : <div className='flex items-center h-[90vh]'>
                            <div className={` backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                                <div className='flex justify-end mb-2'>
                                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                                </div>
                                <svg className='m-auto my-4' width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.9981 73.501L78.2481 38.251L71.2481 31.251L42.9981 59.501L28.748 45.251L21.748 52.251L42.9981 73.501ZM49.9981 100.501C43.0814 100.501 36.5814 99.1877 30.4981 96.561C24.4147 93.9343 19.123 90.3727 14.623 85.876C10.123 81.376 6.56138 76.0843 3.93805 70.001C1.31471 63.9176 0.00138021 57.4176 -0.00195312 50.501C-0.00195312 43.5843 1.31138 37.0843 3.93805 31.001C6.56471 24.9176 10.1264 19.626 14.623 15.126C19.123 10.626 24.4147 7.06431 30.4981 4.44098C36.5814 1.81764 43.0814 0.50431 49.9981 0.500977C56.9147 0.500977 63.4147 1.81431 69.4981 4.44098C75.5814 7.06764 80.8731 10.6293 85.3731 15.126C89.8731 19.626 93.4364 24.9176 96.063 31.001C98.6897 37.0843 100.001 43.5843 99.9981 50.501C99.9981 57.4176 98.6847 63.9176 96.0581 70.001C93.4314 76.0843 89.8697 81.376 85.3731 85.876C80.8731 90.376 75.5814 93.9393 69.4981 96.566C63.4147 99.1926 56.9147 100.504 49.9981 100.501Z" fill="#48EFAC" />
                                </svg>
                                <h1 className='text-[24px] text-center text-[#48EFAC]  w-full font-semibold'>{languageData?.InfluencerThanks}</h1>

                                <div className='flex items-center gap-4'>
                                    <button onClick={e => setOpen(false)} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>

                                </div>
                            </div>
                        </div>
                }

            </div>

        </div>
    )
}

export default Influencer
