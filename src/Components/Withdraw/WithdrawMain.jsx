import React from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import SelectMethod from './SelectMethod'

function WithdrawMain({ selectPayment, selectedPayment, userCountry, user, languageData, setFlowStarted }) {

    const { design } = useDesign()

    return (
        <>
            <p className='text-[18px] md:text-[32px] font-semibold text-center'>{languageData?.withdrawTitle1}</p>
            <p className={`text-[12px] ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'} font-medium text-center saira`}>{languageData?.withdrawSubtitle}</p>
            <div className=' text-center flex justify-center  m-auto mt-3'>
                <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === '0' ? 'rounded-[30px]' : ' rounded-[12px]'} px-8`}>
                    <p className={`text-[32px] w-f ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'} font-bold text-center saira leading-9 mt-1`}>
                        {
                            userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'
                        }
                        {
                            userCountry === 'BR' || userCountry === 'UA' ? user?.earned.toFixed(0) * 5 : user?.earned.toFixed(0)
                        }

                    </p>
                    <p className='text-[12px] font-medium text-center saira leading-3 mb-2'>{languageData?.withdrawPrice}</p>
                </div>
            </div>
            <div>
                <SelectMethod languageData={languageData} selectPayment={selectPayment} selectedPayment={selectedPayment} userCountry={userCountry} />
                <div className='flex justify-center mt-2 lg:mt-4'>
                    <button onClick={e => setFlowStarted(true)} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[350px] outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawBtn}</button>
                </div>
            </div>
        </>
    )
}

export default WithdrawMain