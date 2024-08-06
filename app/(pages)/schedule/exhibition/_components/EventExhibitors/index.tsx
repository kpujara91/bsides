import React from 'react';
import styles from './EventExhibitors.module.scss';
import {ScheduleContent} from '@/components/JsonFiles/schedule'
import Image from 'next/image';

const EventExhibitors: React.FC = () => {
  return (
    <>
        <section className={`ptb-160 ${styles.eventExhibitorsWrapper}`}>
            <div className="container">
                <div className="title-wrapper">
                    <h2 className='title'>{ScheduleContent?.Exhibition?.Exhibitors?.Title}</h2>
                </div>
                {/* {ScheduleContent?.Exhibition?.Exhibitors?.EventExhibitorsList &&
                    <ul className={`flex items-stretch flex-wrap ${styles.eventExhibitorsList}`}>
                        {ScheduleContent?.Exhibition?.Exhibitors?.EventExhibitorsList.map((list,i)=>{
                            return(
                                <React.Fragment key={i}>
                                    <li className='w-1/2 md:w-1/3 xl:w-1/4'>
                                        <div className={`w-full h-full flex items-center justify-center relative ${styles.exhibitorsItem}`}>
                                            <Image src={list?.image} alt='logo' width={228} height={70}/>
                                        </div>
                                    </li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                } */}
                <div className='no-data'>Coming Soon</div>
            </div>
        </section>
    </>
  );
};

export default EventExhibitors;