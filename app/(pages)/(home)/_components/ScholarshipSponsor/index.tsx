import React from 'react';
import styles from './CommunityPartners.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'
import Image from 'next/image';
import Link from 'next/link';


const ScholarshipSponsor: React.FC= () => {

  return (
    <>
        <section className={`pb-80 pt-80 ${styles.communityPartnersWrapper}`}>
            <div className="container">
                <div className="title-wrapper">
                    <h2 className='title'>{HomeContent?.ScholarshipSponsor?.Title}</h2>
                </div>
                {HomeContent?.ScholarshipSponsor?.ScholarshipSponsorList &&
                    <ul className={`flex items-center justify-center flex-wrap ${styles.CommunityPartnerList}`}>
                        {HomeContent?.ScholarshipSponsor?.ScholarshipSponsorList?.map((list,i)=>{
                            return(
                                <React.Fragment key={i}>
                                    <li className='w-1/2 md:w-1/3 xl:w-1/4 '>
                                    <Link href={list?.link} target='_black' >
                                        <div className={`w-full h-full flex items-center justify-center relative ${styles.SponsorItem}`}>
                                            <Image src={list?.image} alt='logo' width={228} height={70}/>
                                        </div>
                                    </Link>
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

export default ScholarshipSponsor;