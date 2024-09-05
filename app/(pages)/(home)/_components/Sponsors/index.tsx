'use client'
import React from 'react';
import styles from '../../../conference/sponsors/_components/OurSponsors/OurSponsors.module.scss';
import {ConferenceContent} from '@/components/JsonFiles/conference'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sponsors: React.FC = () => {


    const pathname = usePathname()


  return (
    <>
        <section className={`pb-80 pt-80 ${styles.ourSponsorsWrapper}`}>
            <div className="container">
                <div className={`${styles.SponsorsDetailsWrapper}`}>
                    {
                        pathname ==="/" ? 
                        (
                            ConferenceContent?.Sponsors?.SponsorsContent?.slice(0,9).map((lists,i) =>{
                                return(
                                    <React.Fragment key={i}>
                                        <div className={`${styles.sponsorsLists}`}>
                                            <div className={`title-wrapper ${styles.titleWrapper}`}>
                                                <h2 className={`${styles.title} title text-center`}>{lists.MainTitle}</h2>
                                            </div>
                                            { lists?.show ?                               
                                            (
                                                 <>{
                                                    lists?.SponsorsDetails?.map((items,i) => {
                                                        return(
                                                            <React.Fragment key={i}>
                                                                <div className={`w-full h-full flex items-center justify-center relative`}>
                                                                    <Link href={items?.url} className={styles.imageBox} target='_blank'>
                                                                        <Image src={items?.ImagePath} alt='Sponsors Image' width={300} height={100}/>
                                                                    </Link>
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                                </>
                                            ) : (
                                                <div className='no-data'>It could be YOU</div>
                                            )
                                            }
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        ):(
                            ConferenceContent?.Sponsors?.SponsorsContent?.map((lists,i) =>{
                                return(
                                    <React.Fragment key={i}>
                                        <div className={`${styles.sponsorsLists}`}>
                                            <div className={`title-wrapper ${styles.titleWrapper}`}>
                                                <h2 className={`${styles.title} title text-center`}>{lists.MainTitle}</h2>
                                            </div>
                                            { lists?.show ?                               
                                            (
                                                 <>{
                                                    lists?.SponsorsDetails?.map((items,i) => {
                                                        return(
                                                            <React.Fragment key={i}>
                                                                <div className={`w-full h-full flex items-center justify-center relative`}>
                                                                    <Link href={items?.url} className={styles.imageBox} target='_blank'>
                                                                        <Image src={items?.ImagePath} alt='Sponsors Image' width={300} height={100}/>
                                                                    </Link>
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                                </>
                                            ) : (
                                                <div className='no-data'>It could be YOU</div>
                                            )
                                            }
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        )
                    


                    }
                </div>
            </div>
        </section>
    </>
  );
};

export default Sponsors;