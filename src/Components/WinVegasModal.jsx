import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import point1 from '../images/NewDesign/newPoint1.png'
import point2 from '../images/NewDesign/newPoint2.png'
import point3 from '../images/NewDesign/newPoint3.png'
import { PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer'
import { Link } from 'react-router-dom'


function WinVegasModal({ setOpen, languageData, user }) {
    const [pdfLoading, setPdfLoading] = useState(false)

    const { design } = useDesign()

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 lg:flex'>
            <div className='max-w-[600px] m-auto relative'>


                <div className='flex justify-end md:my-4 lg:mb-10 lg:absolute right-0 top-[-70px]'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <div>
                    <p className=' m-auto text-[18px] lg:text-[24px] font-semibold text-center'>
                        {languageData.winTitle}
                    </p>
                
                    <div className='mt-4'>
                        <div className='flex items-center'>
                            <img className='w-[32px] h-[32px] mr-2' src={point1} alt="point1" />
                            <p className='saira text-[16px] lg:text-[20px] font-semibold text-left'>{languageData.winPoint1Title}</p>

                        </div>
                        <ul className='list-disc ml-[60px] mt-1'>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>{languageData.winPoint1li1}</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <div className='flex items-center'>
                            <img className='w-[32px] h-[32px] mr-2' src={point2} alt="point2" />
                            <p className='saira text-[16px] lg:text-[20px] font-semibold text-left'>{languageData.winPoint2Title}</p>

                        </div>
                        <ul className='list-disc ml-[60px] mt-1'>
                            <li className='saira text-[12px] lg:text-[14px] font-medium'>{languageData.winPoint2li1}</li>
                        
                            

                        </ul>
                    </div>
                    <div className='mt-4'>
                        <div className='flex items-center'>
                            <img className='w-[32px] h-[32px] mr-2' src={point3} alt="point2" />
                            
                            <p className='saira text-[16px] lg:text-[20px] font-semibold text-left'>{languageData.winPoint3Title}</p>

                        </div>
                        <ul className='list-disc ml-[60px] mt-1'>
                            <li className='saira text-[14px] font-medium'>
                                <PDFDownloadLink className='cursor-pointer' document={<MyDocument {...user} />} fileName="cybersays.pdf">
                                    {({ blob, url, loading, error }) =>
                                        <span className='saira text-[14px] font-bold underline cursor-pointer '>{languageData.winPoint3li1}</span>
                                    }
                                </PDFDownloadLink>

                                </li>
                            <li className='saira text-[14px] font-medium'>{languageData.winPoint3li2}</li>
                            <li className='saira text-[14px] font-medium'>{languageData.winPoint3li3}</li>

                        </ul>
                    </div>
                    <p className='text-[18px] lg:text-[24px] text-center font-semibold gradient-goodluck mt-2'>{languageData.winPointEnd}</p>
                    <Link onClick={e => setOpen(false)} to='/terms' target='_blank' ><p className='text-[8px] lg:text-[10px] text-center font-semibold text-[#D9D9D9] mt-2 underline'>{languageData.winPointEndLink}</p></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default WinVegasModal


const MyDocument = (userData) => (
    <Document>
        <Page size="A4" style={{ padding: '40px' }}>
            <Text style={{ textAlign: 'center', fontSize: '24px', fontWeight: 700 }}>Free Post Form</Text>
            <View style={{ display: 'flex', alignItems: 'left', marginTop: '20px' }}>
                <Text style={{ fontSize: '12px' }}><Text style={{ fontWeight: 700 }}>Company's Address:</Text></Text>
                <Text style={{ fontSize: '12px' }}>Agias Zonis & Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol, Cyprus, 3025</Text>
            </View>
            <View style={{ marginTop: '20px' }}>
                <Text style={{ fontSize: '12px' }}><Text style={{ fontWeight: 700 }}>User ID:</Text> {userData?.id}</Text>
            </View>
            <View style={{ marginTop: '20px' }}>
                <Text style={{ fontSize: '12px' }}><Text style={{ fontWeight: 700 }}>Name:</Text> ____________________________</Text>
            </View>
            <View style={{ marginTop: '20px' }}>
                <Text style={{ fontSize: '12px' }}><Text style={{ fontWeight: 700 }}>Signature:</Text> ____________________________</Text>
            </View>
        </Page>
    </Document>
);