import React, { useEffect, useRef, useState } from 'react';
import usa from '../images/NewDesign/chatFlag/live.png';
import Slider from 'react-infinite-logo-slider'
const moment = require('moment-timezone');

function LiveFeed() {
    const dataItems = [
        {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T11:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        }, {
            username: "Mykola",
            amount: "1.00",
            datetime: "2024-02-02T16:04:31.203Z",
            country: usa
        },
    ];

    return (
        <div className='w-screen bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg fixed top-[55px] lg:top-[85px] py-[2px] z-50'>
            <Slider
                width="170px"
                duration={70}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                {dataItems.map((item, index) => (
                    <Slider.Slide>
                        <div key={index} className='flex justify-between items-center w-[140px] lg:w-[150px] px-[1px] lg:p-[1px] border-[1px] border-[#A2DBF0] rounded-[6px] '>
                            <div>
                                <img className='w-[28px] lg:w-[32px] h-[28px] lg:h-[32px] ml-[1px]' src={item.country} alt="Country Flag" />
                            </div>
                            <div className='text-center'>
                                <p className='text-[10px] lg:text-[12px] saira font-medium truncate w-[50px]'> {item.username}</p>
                                <p className='text-[10px] lg:text-[12px] saira font-medium'> Payout</p>
                            </div>
                            <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[4px] px-1 my-[1px] lg:my-0'>
                                <p className='text-[10px] lg:text-[12px] saira font-bold text-right'> ${item.amount}</p>
                                <p className='text-[10px] lg:text-[12px] saira font-bold'> {moment(item.datetime).hours()} h ago</p>
                            </div>
                        </div>
                    </Slider.Slide>
                ))}
            </Slider>
        </div>
    );
}

export default LiveFeed;
