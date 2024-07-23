import React from 'react';
import {FooterContent} from '@/components/JsonFiles/footer'
import Image from 'next/image';
import styles from  './footer.module.scss'
import Link from 'next/link';
import { Boxes } from '../AceternityUI/background-boxes';

const Footer: React.FC = () => {
    return (
      <>
        <footer className={`relative ${styles.siteFooter}`}>
          <div className="container">
            <div className='flex items-center justify-center md:justify-between flex-col md:flex-row gap-8'>
              <Link href='/' className={`flex-shrink-0 ${styles.footerLogo}`}><Image src={FooterContent?.Logo} alt='logo' width={257} height={124}/></Link>
              <div className='flex items-center md:items-end flex-col gap-3 sm:gap-4 md:gap-5 xl:gap-7'>
                <ul className={`flex items-center gap-2 sm:gap-3 socialMediaList`}>
                  {FooterContent?.SocialMediaList?.map((list,i)=>{
                    return(
                      <React.Fragment key={i}>
                        <li className={`inline-flex items-center justify-center`}><a href={list?.url} title={list?.title} className={`inline-flex items-center justify-center`} target='_blank'><Image src={list?.icon} alt={list?.title} width={16} height={16}/></a></li>
                      </React.Fragment>
                    )
                  })}
                </ul>
                <a href={`mailto:${FooterContent?.Email}`} className={`flex-shrink-0 ${styles.emailLink}`}>{FooterContent?.Email}</a>
              </div>
            </div>
          </div>
          <Boxes className={`${styles.animateBox}`}/>
        </footer>
      </>
    );
  }
  
  export default Footer;