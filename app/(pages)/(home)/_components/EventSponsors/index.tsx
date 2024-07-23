import React from 'react';
import styles from './eventSponsors.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'
import Image from 'next/image';

const EventSponsors: React.FC = () => {
  return (
    <>
        <section className={`pb-160 pt-80 ${styles.eventSponsorsWrapper}`}>
            <div className="container">
                <div className="title-wrapper">
                    <span className={`h3 caption ${styles.PageCaption}`}>{HomeContent?.EventSponsors?.Caption}</span>
                    <h2 className='title'>{HomeContent?.EventSponsors?.Title}</h2>
                </div>
                {/* {HomeContent?.EventSponsors?.EventSponsorsList &&
                    <ul className={`flex items-stretch flex-wrap ${styles.eventSponsorsList}`}>
                        {HomeContent?.EventSponsors?.EventSponsorsList?.map((list,i)=>{
                            return(
                                <React.Fragment key={i}>
                                    <li className='w-1/2 md:w-1/3 xl:w-1/4'>
                                        <div className={`w-full h-full flex items-center justify-center relative ${styles.SponsorItem}`}>
                                            <Image src={list?.image} alt='logo' width={228} height={70}/>
                                        </div>
                                    </li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                } */}
                <div className='no-data'>It could be YOU</div>
            </div>
        </section>
    </>
  );
};

export default EventSponsors;