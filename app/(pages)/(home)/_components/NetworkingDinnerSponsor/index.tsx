import React from 'react';
import styles from './NetworkingDinnerSponsor.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'
import Image from 'next/image';

const NetworkingDinnerSponsor: React.FC = () => {
  return (
    <>
        <section className={`pb-160 pt-80 ${styles.networkingDinnerSponsorWrapper}`}>
            <div className="container">
                <div className="title-wrapper text-center">
                    <h2 className='title text-center'>{HomeContent?.NetworkingDinnerSponsor?.Title}</h2>
                </div>
                {HomeContent?.NetworkingDinnerSponsor?.NetworkingDinnerList &&
                    <ul className={`flex items-stretch justify-center flex-wrap ${styles.CommunityPartnerList}`}>
                        {HomeContent?.NetworkingDinnerSponsor?.NetworkingDinnerList?.map((list,i)=>{
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
                }
            </div>
        </section>
    </>
  );
};

export default NetworkingDinnerSponsor;