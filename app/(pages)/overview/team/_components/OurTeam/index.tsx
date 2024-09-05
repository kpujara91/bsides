import Image from 'next/image';
import styles from './ourTeam.module.scss'
import { OverviewContent } from '@/components/JsonFiles/overview';
import React from 'react';

const OurTeam: React.FC = () => {
    return (
      <>
        <section className={`ptb-160 ${styles.ourTeamWrapp}`}>
            <div className="container">
                <div className="title-wrapper">
                    {OverviewContent?.Team?.OurTeam?.Title &&
                        <h2 className="title">{OverviewContent?.Team?.OurTeam?.Title}</h2>
                    }
                    {OverviewContent?.Team?.OurTeam?.Title &&
                        <p className='h3'>{OverviewContent?.Team?.OurTeam?.Description}</p>
                    }
                </div>
                <div className={`flex items-start flex-wrap gap-y-6 xl:gap-y-8 speakerCardList`}>
                    {OverviewContent?.Team?.OurTeam?.OurTeamList?.map((OTList,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`relative w-1/2 sm:w-1/3 lg:w-1/4 speakerCard`}>
                                    <Image src={OTList?.speakerImage} alt={OTList?.speakerName} width={700} height={875} className={`speakerProfile`}/>
                                    <div className={`absolute left-0 bottom-0 w-full p-2 sm:p-3 flex items-start xxxl:items-center justify-between flex-col xxxl:flex-row gap-2 speakerData`}>
                                        <div>
                                            <h3 className={`font-nasalization speakerName`}>{OTList?.speakerName}</h3>
                                            {OTList?.speakerDesignation &&
                                                <p className={`font-nasalization speakerDesignation`}>{OTList?.speakerDesignation}</p>
                                            }
                                        </div>
                                        <ul className={`flex items-center gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                                            {OTList?.speakerSocialMediaList?.map((list,j)=>{
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
                <div className={`AnimateCircle`}>
                    <Image src={OverviewContent?.GlobalAnimateCircleImage} alt="circleImage" width={999} height={900} />
                </div>
            </div>
        </section>
      </>
    );
};

export default OurTeam;