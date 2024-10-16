
'use client'
import React from 'react';
import styles from './OurSponsors.module.scss'
import {ConferenceContent} from '@/components/JsonFiles/conference'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const OurSponsors: React.FC = () => {


    return (
      <section className={`${styles.ourSponsorsWrapper} ptb-160`}>
        <div className='container'>
            <div className={`${styles.SponsorsDetailsWrapper}`}>
                {
              
                    ConferenceContent?.Sponsors?.SponsorsContent?.map((lists,i) =>{
                        return(
                            <React.Fragment key={i}>
                                <div className={`${styles.sponsorsLists}`}>
                                    <div className={`title-wrapper ${styles.titleWrapper}`}>
                                        <h2 className={`${styles.title} title text-center`}>{lists.MainTitle}</h2>
                                    </div>
                                    { lists?.show ? (
                                        <>{
                                            lists?.SponsorsDetails?.map((items,i) => {
                                                return(
                                                    <React.Fragment key={i}>
                                                        <div className={`flex items-center gap-5 md:gap-7 flex-col md:flex-row overflow-hidden relative ${styles.sponsorsCard}`}>
                                                            <div className={styles.imageBox}>
                                                                <Image src={items?.ImagePath} alt='Sponsors Image' />
                                                               {
                                                                items?.extraTitle !== "" && 
                                                                (
                                                                    <>
                                                                    <br/>
                                                                    <span className='text-center' style={{width: '100%'}}>{items?.extraTitle}</span>
                                                                    </>
                                                                )
                                                               }
                                                            </div>
                                                            <div className={styles.content}>
                                                                {items?.description && items?.description?.map((des,i) => {
                                                                    return(
                                                                        <React.Fragment key={i}>
                                                                            {
                                                                                des &&
                                                                                (
                                                                                    <p className='mb-3 xl:mb-6 last:mb-0'>{des}</p>
                                                                                )
                                                                            }
                                                                        </React.Fragment>
                                                                    )
                                                                })}
    
                                                                <Link href={items?.url} className={`${styles.urlLink}`} target='_blank'>{items.urlTitle}</Link>
                                                            </div>
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
                 
                }
            </div>
        </div>
      </section>
    );
  }

  export default OurSponsors;