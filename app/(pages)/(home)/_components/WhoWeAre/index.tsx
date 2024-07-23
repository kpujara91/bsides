import { url } from 'inspector';
import styles from './whoWeAre.module.scss';
import {HomeContent} from '@/components/JsonFiles/home'
import { InfiniteMovingCards } from '@/components/AceternityUI/infinite-moving-cards';

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
        {HomeContent?.WhoWeAre?.MovingCardImageList &&
          <InfiniteMovingCards
              items={HomeContent?.WhoWeAre?.MovingCardImageList}
              direction="right"
              speed="slow"
              className={`mt-60 ${styles.movingCards}`}
          />
        }
      </section>
    </>
  );
};

export default WhoWeAre;