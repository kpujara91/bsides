import { OverviewContent } from '@/components/JsonFiles/overview';
import styles from './conductDetails.module.scss'
import Image from 'next/image';

const ConductDetails: React.FC = () => {
    return (
      <>
        <section className={`ptb-160 ${styles.conductDetailsWrap}`}>
            <div className="container">
                {OverviewContent?.CodeOfConduct?.ConductDetails?.Description}
            </div>
            <div className={`AnimateCircle`}>
                <Image src={OverviewContent?.GlobalAnimateCircleImage} alt="circleImage" width={999} height={900} />
            </div>
        </section>
      </>
    );
  };
  
  export default ConductDetails;