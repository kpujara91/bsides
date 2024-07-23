import React from 'react';
import Image from 'next/image';
import styles from './speakersAttending.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'

const SpeakersAttending: React.FC = () => {
  return (
    <>
        <section className={`ptb-160 ${styles.speakersAttendingWrapper}`}>
            <div className="container">
                <div className="title-wrapper">
                    <span className={`h3 caption ${styles.PageCaption}`}>{HomeContent?.SpeakersAttending?.Caption}</span>
                    <h2 className='title'>{HomeContent?.SpeakersAttending?.KeynoteSpeakerTitle}</h2>
                </div>
                {/* <div className={`flex items-start flex-wrap gap-y-6 xl:gap-y-8 mb-160 ${styles.speakerCardList}`}>
                    {HomeContent?.SpeakersAttending?.KeynoteSpeakerList?.map((SpeakerList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 ${styles.speakerCard}`}>
                                    <Image src={SpeakerList?.speakerImage} alt={SpeakerList?.speakerName} width={700} height={875} className={`${styles.speakerProfile}`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 ${styles.speakerData}`}>
                                        <div>
                                            <h3 className={`font-nasalization ${styles.speakerName}`}>{SpeakerList?.speakerName}</h3>
                                            <p className={`font-nasalization ${styles.speakerDesignation}`}>{SpeakerList?.speakerDesignation}</p>
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList ${styles.speakersocialMediaList}`}>
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
                </div> */}
                <div className='no-data mb-160'>Coming Soon</div>
                <div className="title-wrapper">
                    <h2 className='title'>{HomeContent?.SpeakersAttending?.TechnicalSpeakerTitle}</h2>
                </div>
                {/* <div className={`flex items-start flex-wrap gap-y-6 xl:gap-y-8 ${styles.speakerCardList}`}>
                    {HomeContent?.SpeakersAttending?.TechnicalSpeakerList?.map((SpeakerList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 ${styles.speakerCard}`}>
                                    <Image src={SpeakerList?.speakerImage} alt={SpeakerList?.speakerName} width={700} height={875} className={`${styles.speakerProfile}`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 ${styles.speakerData}`}>
                                        <div>
                                            <h3 className={`font-nasalization ${styles.speakerName}`}>{SpeakerList?.speakerName}</h3>
                                            <p className={`font-nasalization ${styles.speakerDesignation}`}>{SpeakerList?.speakerDesignation}</p>
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList ${styles.speakersocialMediaList}`}>
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
                </div> */}
                <div className='no-data'>Coming Soon</div>
            </div>
        </section>
    </>
  );
};

export default SpeakersAttending;