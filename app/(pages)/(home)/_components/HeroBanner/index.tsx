import React from 'react';
import { FlipWords } from '@/components/AceternityUI/flip-words';
import styles from './heroBanner.module.scss';
import { EvervaultCard } from '@/components/AceternityUI/evervault-card';
import {HomeContent} from '@/components/JsonFiles/home'
import { HoverBorderGradient } from '@/components/AceternityUI/hover-border-gradient';

const HeroBanner: React.FC = () => {
  return (
    <>
      <section className={`relative ${styles.heroBanner}`}>
        <div className="container">
          <div className={`overflow-hidden ${styles.heroTitleWraper}`}>
            <h1 className={`font-nasalization text-center gradiant-title title-wrapper`}>
              {HomeContent?.HiroBanner?.banerTitle} <FlipWords words={HomeContent?.HiroBanner?.bannerAnimationLoop} /> <br /> {HomeContent?.HiroBanner?.banerYear}
            </h1>
            <ul className={`flex items-center justify-center flex-wrap gap-2 sm:gap-4 xl:gap-7 ${styles.bannerCardList}`}>
                {HomeContent?.HiroBanner?.BannerCardList?.map((list,i)=>{
                    return(
                        <React.Fragment key={i}>
                            <HoverBorderGradient
                                as="li"
                                containerClassName={`h3 ${styles.bannerCard}`}
                            >
                                {list}
                            </HoverBorderGradient>
                        </React.Fragment>
                    )
                })}
            </ul>
          </div>
        </div>
        <EvervaultCard className={`absolute left-0 top-0 w-full h-full ${styles.heroBgAnimation}`} characters={HomeContent?.HiroBanner?.bgAnimationText}/>
      </section>
    </>
  );
};

export default HeroBanner;