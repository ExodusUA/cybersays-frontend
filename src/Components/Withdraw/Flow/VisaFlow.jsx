import React, { useEffect, useState } from "react";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import OTPVerify from "../OTPVerify";

function VisaFlow({ languageData, setConfirm, setError }) {
  const { design } = useDesign();

<<<<<<< Updated upstream
  const [transfer, setTransfer] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [valueCard, setValueCard] = useState("");
=======
    const [transfer, setTransfer] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [citizenship, setCitizenship] = useState(null);
    const [citizenshipOption, setCitizenshipOption] = useState(null);

    const selectedCitizenship = [
        {
            option: 'Brazil',
        },
        {
            option: 'Ukraine',
        },
        {
            option: 'United States',
        },
        {
            option: 'Canada',
        },
        {
            option: 'Australia',
        },
        {
            option: 'United Kingdom',
        }
    ]
>>>>>>> Stashed changes

  const [step, setStep] = useState(1);

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isVerified) {
      setConfirm(true);
    }
  }, [isVerified]);

  return (
    <div className={` relative m-auto mt-2 w-full  max-w-[600px] rounded-[12px] px-2 lg:px-4`}>
      {step === 1 ? (
        <>
          <p className="my-2 text-center text-[18px] font-semibold md:text-[32px] lg:leading-[40px]">{languageData?.visaFlowTitle}</p>

<<<<<<< Updated upstream
          <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === "0" ? "rounded-[30px]" : " rounded-[12px]"} px-8`}>
            <p className={`text-[14px]  ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"} saira mt-1 py-1  text-center font-bold`}>{languageData?.visaFlowSubTitle}</p>
          </div>
=======
        <div className={` max-w-[600px] w-full m-auto`}>
            {
                step === 1
                    ? <>
                        <p className='text-[18px] md:text-[32px] font-semibold text-center my-2 lg:leading-[40px]'>{languageData?.visaFlowTitle}</p>
                        <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === '0' ? 'rounded-[30px]' : ' rounded-[12px]'} px-8`}>
                            <p className={`text-[14px]  ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'} font-bold text-center saira  mt-1 py-1`}>
                                {languageData?.visaFlowSubTitle}
                            </p>
                        </div>
                        <p className='text-[12px] saira mb-1 mt-3'>Full Name</p>
                        <input
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            className='bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-3  focus:ring-0 outline-none saira' placeholder='Full Name' type="text" />
                        <p className='text-[12px] saira mb-1 mt-3'>Email Adress</p>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-3  focus:ring-0 outline-none saira' placeholder='Email Adress' type="text" />
                        <p className='saira text-[12px] font-medium my-1'>{languageData?.pixType}</p>
                        <div className={` bg-white px-3 py-2 lg:py-3 mt-1 border relative ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                            <div onClick={e => setCitizenship(!citizenship)} className={`flex  items-center justify-between cursor-pointer`}>
                                <div className='flex items-center' >
                                    <p className='saira text-[16px] font-normal text-[#1E1E1E]'>{citizenshipOption || languageData?.pixTypeSelectMain}</p>
                                </div>
                                <div className='ml-2'>
                                    {
                                        citizenship
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
                            citizenship && <>
                                <div className={`bg-white px-3 py-2 mt-2 border absolute shadow-sm max-w-[600px] w-full h-[150px] overflow-y-auto ${design === '0' ? 'rounded-[18px]' : 'rounded-[12px]'}`} >
                                    {
                                        selectedCitizenship.map((item, index) => (
                                            <div key={index} className='flex items-center gap-1 hover:bg-slate-200 rounded-[8px] cursor-pointer h-[25px]' onClick={e => {
                                                setCitizenshipOption(item.option)
                                                setCitizenship(false)
                                            }}>
                                                <label className=" flex items-center ml-2">
                                                    <p className='text-[#1E1E1E] saira text-[16px] font-normal cursor-pointer' id={item.option} name={item.option} value={item.option} checked={citizenshipOption === item.option} >{item.option}</p>
                                                </label>
                                            </div>

                                        ))
                                    }

                                </div>
                            </>
                        }
                        <div className='flex justify-center mt-2 lg:mt-4'>
                            <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.visaFlowBtn}</button>
                        </div>
                    </>
                    : <>
                        <OTPVerify languageData={languageData} setStep={setStep} email={email} isVerified={setIsVerified} />
                    </>
            }
        </div>
>>>>>>> Stashed changes

          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowSelectName1}</p>
          <select value={transfer} onChange={(e) => setTransfer(e.target.value)} className="custom-select saira h-[45px] w-full rounded-[12px] bg-white px-2  text-[#1E1E1E] outline-none focus:ring-0">
            <option className="saira text-black">{languageData?.visaFlowSelect1}</option>
          </select>
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowInput}</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="saira h-[45px] w-full rounded-[12px] bg-white px-3  text-[#1E1E1E] outline-none focus:ring-0"
            placeholder={languageData?.visaFlowPlaceholder}
            type="text"
          />
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowSelectName2}</p>
          <select value={card} onChange={(e) => setCard(e.target.value)} className="custom-select saira h-[45px] w-full rounded-[12px] bg-white px-2  text-[#1E1E1E] outline-none focus:ring-0">
            <option className="saira text-black">{languageData?.visaFlowSelect2}</option>
          </select>
          <p className="saira mb-1 mt-3 text-[12px]">{languageData?.visaFlowSelectName3}</p>
          <select value={valueCard} onChange={(e) => setValueCard(e.target.value)} className="custom-select saira h-[45px] w-full rounded-[12px] bg-white px-2  text-[#1E1E1E] outline-none focus:ring-0">
            <option className="saira text-black">{languageData?.visaFlowSelect3}</option>
          </select>
          <div className="mt-2 flex justify-center lg:mt-4">
            <button
              className={`saira w-full  border-[2px]  bg-white py-2 text-[18px] font-semibold text-black outline-none  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
            >
              {languageData?.visaFlowBtn}
            </button>
          </div>
        </>
      ) : (
        <>
          <OTPVerify languageData={languageData} setStep={setStep} email={email} isVerified={setIsVerified} />
        </>
      )}
    </div>
  );
}

export default VisaFlow;
