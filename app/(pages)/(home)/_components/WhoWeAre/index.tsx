'use client'
import { url } from 'inspector';
import styles from './whoWeAre.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'
import { InfiniteMovingCards } from '@/components/AceternityUI/infinite-moving-cards';
import Marquee from 'react-fast-marquee';
import React from 'react';
import Image from 'next/image';

const WhoWeAre: React.FC = () => {
  return (
    <>
      <section className={`${styles.whoWeAreWraper} ptb-160 mb-80`}>
        <div className={`${styles.BGImage}`} style={{ backgroundImage: `url(${HomeContent?.WhoWeAre?.BGImage})` }}></div>
        <div className="container">
            <div className='flex items-start justify-between flex-col xl:flex-row gap-3 xl:gap-6 title-wrapper'>
                <div className='w-full xl:w-2/5'>
                    <span className={`h3 caption ${styles.PageCaption}`}>{HomeContent?.WhoWeAre?.Caption}</span>
                    <h2 className='title'>{HomeContent?.WhoWeAre?.Title}</h2>
                </div>
                <div className='w-full xl:w-3/5'>
                    <p>{HomeContent?.WhoWeAre?.Description}</p>
                </div>
            </div>
        </div>
        {/* {HomeContent?.WhoWeAre?.MovingCardImageList &&
          <InfiniteMovingCards
              items={HomeContent?.WhoWeAre?.MovingCardImageList}
              direction="right"
              speed="slow"
              className={`mt-60 ${styles.movingCards}`}
          />
        } */}
        {/* This code is for marquee */}
        <Marquee pauseOnHover speed={80} loop={0} className={`mt-60 ${styles.movingCards}`}>
          {HomeContent?.WhoWeAre?.MovingCardImageList?.map((list,i)=>{
            return(
              <React.Fragment key={i}>
                <div className={`w-[200px] h-[100px] sm:w-[250px] sm:h-[150px] md:w-[300px] md:h-[200px] xl:w-[400px] xl:h-[300px] xxl:w-[516px] xxl:h-[444px] ${styles.movingCardsItem}`}>
                  <Image src={list?.image} alt="image" className=''/>
                </div>
              </React.Fragment>
            )
          })}
        </Marquee>
      </section>
    </>
  );
};

export default WhoWeAre;