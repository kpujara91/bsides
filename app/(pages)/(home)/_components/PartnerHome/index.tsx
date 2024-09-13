'use client'
import React from 'react';
import styles from '../../../conference/sponsors/_components/OurSponsors/OurSponsors.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import immunefi from '../../../../../public/images/immunify.svg'

// Static data for CROWDSOURCEDSECURITYPARTNER
const CROWDSOURCEDSECURITYPARTNER = {
    MainTitle: <>CROWDSOURCED SECURITY <span> PARTNER</span></>,
    SponsorsDetails: [
        {
            ImagePath: immunefi,  // Replace with actual image path
            extraTitle: "Earn the World’s Largest Bounties",
            description: [
                `Immunefi is the leading onchain crowdsourced security platform with the world’s largest bounties. We offer legendary response times and top-notch support for our hackers. The assets we protect — blockchains, NFT projects, and smart contracts — are the world’s most valuable assets, and our security researchers earn life-changing sums while boosting onchain security.`
            ],
            url: `https://immunefi.com/bug-bounty/?utm_source=Security-BSides&utm_medium=events&utm_campaign=Security-BSides`,
            urlTitle: `Learn more : https://immunefi.com/bug-bounty/`
        }
    ]
};

const PartnerHome: React.FC = () => {
    const pathname = usePathname();

    return (
        <>
            <section className={`pb-80 pt-80 ${styles.ourSponsorsWrapper}`}>
                <div className="container">
                    <div className={`${styles.SponsorsDetailsWrapper}`}>
                        <div className={`${styles.sponsorsLists}`}>
                            <div className={`title-wrapper ${styles.titleWrapper}`}>
                                <h2 className={`title`}>{CROWDSOURCEDSECURITYPARTNER.MainTitle}</h2>
                            </div>
                            {CROWDSOURCEDSECURITYPARTNER?.SponsorsDetails?.map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className={`w-full h-full flex items-center justify-center relative`}>

                                        <Link href={item.url} className={styles.imageBox} target='_blank'>
                                            <Image src={item.ImagePath} alt='Sponsors Image' width={300} height={100} />
                                            {
                                                                item?.extraTitle !== "" && 
                                                                (
                                                                    <>
                                                                    <br/>
                                                                    <span className='text-center text-white'>{item?.extraTitle}</span>
                                                                    </>
                                                                )
                                                               }
                                        </Link>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PartnerHome;
