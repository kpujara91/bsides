import Image from 'next/image';
import styles from './ourTeam.module.scss'
import { AwardsContent } from "@/components/JsonFiles/awards";
import React from 'react';

const OurTeam: React.FC = () => {
    return (
      <>
        <section className={`ptb-160 ${styles.ourTeamWrapp}`}>
            <div className="container">
                <div className="title-wrapper text-center">
                    {AwardsContent?.AwardsEntryGuidelines?.MeetOurJuryTitle &&
                        <h2 className="title">{AwardsContent?.AwardsEntryGuidelines?.MeetOurJuryTitle}</h2>
                    }
                </div>
                <div className={`flex items-start justify-center flex-wrap gap-y-6 xl:gap-y-8 speakerCardList`}>
                    {AwardsContent?.AwardsEntryGuidelines?.MeetOurJury?.map((OTList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 speakerCard`}>
                                    <Image src={OTList?.Image} alt={OTList?.Name} width={700} height={875} className={`speakerProfile`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 speakerData`}>
                                        <div>
                                            <h3 className={`font-nasalization speakerName`}>{OTList?.Name}</h3>
                                            {OTList?.Designation &&
                                                <p className={`font-nasalization speakerDesignation`}>{OTList?.Designation}</p>
                                            }
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                                            {OTList?.SocialMediaList?.map((list,j)=>{
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
            </div>
        </section>
      </>
    );
};

export default OurTeam;