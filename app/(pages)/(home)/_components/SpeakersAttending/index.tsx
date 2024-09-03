'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {HomeContent} from '@/components/JsonFiles/home'
import { Spinnaker } from 'next/font/google';
import { BackgroundGradientDemo } from '../KeynoteSpeaker';

const SpeakersAttending: React.FC = () => {

    const [pdfOpen, setPDFopen] = useState(false)
    const [pdfload, setpdfload] = useState("")
    console.log("pdfload==>", pdfload);
    
    const openModalHandle=(pdf:any)=>{

        console.log(pdf,"pdf")
        
        setPDFopen(true)
        setpdfload(pdf)
    }

    const closeModalHandle = () => {
        setPDFopen(false)
        setpdfload("")
    };

  return (
    <>
        <section className={`ptb-160`} id='speaker'>
            <div className="container">
                {/* Keynote Speaker */}
                <div className="title-wrapper text-center">
                    <span className={`h3 caption`}>{HomeContent?.SpeakersAttending?.Caption}</span>
                    <h2 className='title text-center'>{HomeContent?.SpeakersAttending?.KeynoteSpeakerTitle}</h2>
                </div>
               <div className={`flex items-start justify-center flex-wrap gap-y-6 xl:gap-y-8 mb-160 speakerCardList`}>
                    {/* {HomeContent?.SpeakersAttending?.KeynoteSpeakerList?.map((SpeakerList,i)=>{            
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 speakerCard`}
                                // onClick={()=>openModalHandle(SpeakerList?.pdfRef)}
                                style={{cursor:"pointer"}}
                                >
                                    <Image src={SpeakerList?.speakerImage} alt={SpeakerList?.speakerName} width={700} height={875} className={`speakerProfile`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 speakerData`}>
                                        <div>
                                            <h3 className={`font-nasalization speakerName`}>{SpeakerList?.speakerName}</h3>
                                            <p className={`font-nasalization speakerDesignation`}>{SpeakerList?.speakerDesignation}</p>
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                                            {SpeakerList?.speakerSocialMediaList?.map((list,j)=>{
                                                return(
                                                <React.Fragment key={j}>
                                                    {list?.url &&
                                                    <li className={`inline-flex items-center justify-center`}>
                                                        {
                                                            // list?.title=="Bio Info" ? 
                                                            // <div
                                                            //   onClick={()=>openModalHandle(list?.url)}
                                                            //   title={list?.title} className={`inline-flex items-center justify-center`}>
                                                            // <Image src={list?.icon} alt={list?.title} width={16} height={16}/>
                                                            // </div>
                                                            // :
                                                            <a href={list?.url} title={list?.title} className={`inline-flex items-center justify-center`} target='_blank'>
                                                            <Image src={list?.icon} alt={list?.title} width={16} height={16}/>
                                                            </a>
                                                            
                                                        }
                                                            </li>
                                                }
                                                </React.Fragment>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })} */}
                          <BackgroundGradientDemo data={HomeContent?.SpeakersAttending?.KeynoteSpeakerList} />
                </div> 


      

                {/* <div className='no-data mb-160'>Coming Soon</div> */}



                {/* Closing Keynote Speakers */}
                <div className="title-wrapper text-center">
                    <h2 className='title text-center'>{HomeContent?.SpeakersAttending?.ClosingKeynoteTitle}</h2>
                </div>
                <div className={`flex items-start justify-center flex-wrap gap-y-6 xl:gap-y-8 mb-160 speakerCardList`}>
                    {HomeContent?.SpeakersAttending?.ClosingKeynoteSpeakerList?.map((SpeakerList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 speakerCard`}>
                                    <Image src={SpeakerList?.speakerImage} alt={SpeakerList?.speakerName} width={700} height={875} className={`speakerProfile`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 speakerData`}>
                                        <div>
                                            <h3 className={`font-nasalization speakerName`}>{SpeakerList?.speakerName}</h3>
                                            <p className={`font-nasalization speakerDesignation`}>{SpeakerList?.speakerDesignation}</p>
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                                            {SpeakerList?.speakerSocialMediaList?.map((list,j)=>{
                                                return(
                                                <React.Fragment key={j}>
                                                    {list?.url &&
                                                    <li className={`inline-flex items-center justify-center`}><a href={list?.url} title={list?.title} className={`inline-flex items-center justify-center`} target='_blank'><Image src={list?.icon} alt={list?.title} width={16} height={16}/></a></li>
                                                }
                                                </React.Fragment>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                {/* <div className='no-data mb-160'>Coming Soon</div> */}



                 {/* Technical  Speaker */}
                <div className="title-wrapper text-center">
                    <h2 className='title text-center'>{HomeContent?.SpeakersAttending?.TechnicalSpeakerTitle}</h2>
                </div>
                <div className={`flex items-start flex-wrap gap-y-6 xl:gap-y-8 speakerCardList mb-160`}>
                    {HomeContent?.SpeakersAttending?.TechnicalSpeakerList?.map((SpeakerList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 speakerCard`}>
                                    <Image src={SpeakerList?.speakerImage} alt={SpeakerList?.speakerName} width={700} height={875} className={`speakerProfile`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 speakerData`}>
                                        <div>
                                            <h3 className={`font-nasalization speakerName`}>{SpeakerList?.speakerName}</h3>
                                            <p className={`font-nasalization speakerDesignation`}>{SpeakerList?.speakerDesignation}</p>
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                                            {SpeakerList?.speakerSocialMediaList?.map((list,j)=>{
                                                return(
                                                <React.Fragment key={j}>
                                                    <li className={`inline-flex items-center justify-center`}><a href={list?.url} title={list?.title} className={`inline-flex items-center justify-center`} target='_blank'><Image src={list?.icon} alt={list?.title} width={16} height={16}/></a></li>
                                                </React.Fragment>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                {/* <div className='no-data mb-160'>Coming Soon</div> */}


        {/* Technical  Speaker */}
                <div className="title-wrapper text-center">
                    <h2 className='title text-center'>{HomeContent?.SpeakersAttending?.CxoSpeakersTitle}</h2>
                </div>
                <div className={`flex items-start flex-wrap gap-y-6 xl:gap-y-8 speakerCardList`}>
                    {HomeContent?.SpeakersAttending?.CxoSpeakerList?.map((SpeakerList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 speakerCard`}>
                                    <Image src={SpeakerList?.speakerImage} alt={SpeakerList?.speakerName} width={700} height={875} className={`speakerProfile`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 speakerData`}>
                                        <div>
                                            <h3 className={`font-nasalization speakerName`}>{SpeakerList?.speakerName}</h3>
                                            <p className={`font-nasalization speakerDesignation`}>{SpeakerList?.speakerDesignation}</p>
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                                            {SpeakerList?.speakerSocialMediaList?.map((list,j)=>{
                                                return(
                                                <React.Fragment key={j}>
                                                    <li className={`inline-flex items-center justify-center`}><a href={list?.url} title={list?.title} className={`inline-flex items-center justify-center`} target='_blank'><Image src={list?.icon} alt={list?.title} width={16} height={16}/></a></li>
                                                </React.Fragment>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                 {/* <div className='no-data mb-160'>Coming Soon</div> */}
            </div>
        </section>
        {pdfOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" >
                    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
                        <button
                            onClick={closeModalHandle}
                            className="absolute top-2 right-2 text-white"
                            style={{backgroundColor:"black",borderRadius:"50%",width:"30px",height:"30px"}}
                        >
                            X
                        </button>
                        <iframe   
                            src={pdfload} 
                            height={700}
                            width={"100%"}
                            className="border-none" 
                        />
                    </div>
                </div>
            )}

    </>
  );
};

export default SpeakersAttending;