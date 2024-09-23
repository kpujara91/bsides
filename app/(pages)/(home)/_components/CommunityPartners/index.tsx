import React from 'react';
import styles from './CommunityPartners.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'
import Image from 'next/image';

const CommunityPartners: React.FC = () => {
  return (
    <>
        <section className={`pb-80 pt-80 ${styles.communityPartnersWrapper}`}>
            <div className="container">
                <div className="title-wrapper text-center">
                    <h2 className='title'>{HomeContent?.CommunityPartners?.Title}</h2>
                </div>
                {HomeContent?.CommunityPartners?.CommunityPartnerList &&
                    <ul className={`flex items-center sm:gap-y-12 gap-6 flex-wrap sm:gap-x-0 gap-x-6 justify-center ${styles.CommunityPartnerList}`}>
                        {HomeContent?.CommunityPartners?.CommunityPartnerList?.map((list,i)=>{
                            return(
                                <React.Fragment key={i}>
                                    <li className='w-1/2 md:w-1/3 xl:w-1/4'>
                                        <div className={`w-full h-full flex  justify-center relative ${styles.SponsorItem}`}>
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

export default CommunityPartners;