import { OverviewContent } from '@/components/JsonFiles/overview';
import styles from './venueDetails.module.scss'
import Image from 'next/image';
import React from 'react';

const VenueDetails: React.FC = () => {
    return (
      <>
        <section className={`ptb-160 ${styles.venueDetailsWrapp}`}>
            <div className="container">
                <div className='text-center title-wrapper'>
                    <span className='h3 caption'>{OverviewContent?.Venue?.VenueDetails?.Caption}</span>
                    <h2 className='title'>{OverviewContent?.Venue?.VenueDetails?.Title}</h2>
                    <h3>{OverviewContent?.Venue?.VenueDetails?.Location}</h3>
                </div>
                <div className='flex items-stretch flex-col lg:flex-row gap-6 xl:gap-10 mb-60 last:m-0'>
                    <div className='w-full lg:w-1/2'>
                        {OverviewContent?.Venue?.VenueDetails?.VenuePlaceImage &&
                            <Image src={OverviewContent?.Venue?.VenueDetails?.VenuePlaceImage} alt='VenuePlace' width={1296} height={776} className={`${styles.venuePlaceImage}`}/>
                        }
                    </div>
                    <div className='w-full lg:w-1/2'>
                        {OverviewContent?.Venue?.VenueDetails?.VenuePlacLocation && 
                            <iframe
                                src={OverviewContent?.Venue?.VenueDetails?.VenuePlacLocation}
                                width="600"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        }
                    </div>
                </div>
                <div className='text-center title-wrapper'>
                    <h2 className='title'>{OverviewContent?.Venue?.VenueDetails?.MediaTitle}</h2>
                </div>
                {OverviewContent?.Venue?.VenueDetails?.VenuePlacMediaList && 
                    <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10 ${styles.venuePlacMediaList}`}>
                        {OverviewContent?.Venue?.VenueDetails?.VenuePlacMediaList?.map((list,k)=>{
                            return(
                                <React.Fragment key={k}>
                                    <li>
                                        <Image src={list?.icon} alt={list?.title}/>
                                        <h3>{list?.title}</h3>
                                        {list?.url ?
                                            <p><a href={list?.url} target='_blank'>{list?.subtitle}</a></p>
                                            :
                                            <p>{list?.subtitle}</p>
                                        }
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
  
export default VenueDetails;