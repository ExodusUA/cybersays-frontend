import React, { useEffect, useState } from 'react';
import usa from '../images/NewDesign/chatFlag/live.png';
import info from '../Requests/info';
import io from 'socket.io-client';
const moment = require('moment-timezone');


function LiveFeed({ user }) {

    const [feedList, setFeedList] = useState([])

    useEffect(() => {
        console.log('feedList', feedList);
    }, [feedList])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await info.getFeedData();
                let data = res.data;


                setFeedList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        setInterval(() => {
            fetchData();
        }, 30000);
    }, []);

    return (
        <div className='w-screen bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg fixed top-[55px] lg:top-[85px] py-[2px] z-50 min-h-[44px] pl-2'>
            <div className='flex items-center justify-between gap-2'>
                {
                    feedList.map((item, index) => (
                        <div key={index} className='feedShow flex justify-between items-center minw-[140px] lg:min-w-[150px] px-[1px] lg:p-[1px] border-[1px] border-[#A2DBF0] rounded-[6px] '>
                            <div>
                                <img className='w-[28px] lg:w-[32px] h-[28px] lg:h-[32px] ml-[1px] rounded-sm' src={`https://flagsapi.com/${item.country?.toUpperCase() || "US"}/flat/64.png`} alt="Country Flag" />
                            </div>
                            <div className=''>
                                <p className='text-[10px] lg:text-[12px] saira font-medium truncate w-[50px]'> {item.email}</p>
                                <p className='text-[10px] lg:text-[12px] saira font-medium w-[50px]'> {
                                    item.recordType === 1 ? 'Points' : item.recordType === 2 ? 'Tickets' : 'Earned'
                                }</p>
                            </div>
                            <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[4px] px-1 my-[1px] lg:my-0'>
                                <p className='text-[10px] lg:text-[12px] saira font-bold text-right'> {item.recordType === 3 ? '$' : ''}{item.amount}</p>
                                <p className='text-[10px] lg:text-[12px] saira font-bold truncate w-[50px]'> {moment(Number(item.datetime) * 1000).fromNow()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LiveFeed;
