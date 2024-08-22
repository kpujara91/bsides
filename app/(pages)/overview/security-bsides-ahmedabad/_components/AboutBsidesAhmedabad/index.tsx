import { OverviewContent } from "@/components/JsonFiles/overview";
import styles from './aboutBsidesAhmedabad.module.scss'
import Image from "next/image";

const AboutBsidesAhmedabad: React.FC = () => {
  return (
    <>
      <section className={`ptb-160 ${styles.AboutBsidesAhmedabadWrapp}`}>
        <div className="container">
            <div className="title-wrapper">
              {OverviewContent?.SecurityBsidesAhmedabad?.AboutBsidesAhmedabad?.Caption &&
                <span className="h3 caption">{OverviewContent?.SecurityBsidesAhmedabad?.AboutBsidesAhmedabad?.Caption}</span>
              }
              {OverviewContent?.SecurityBsidesAhmedabad?.AboutBsidesAhmedabad?.Title &&
                <h2 className="title">{OverviewContent?.SecurityBsidesAhmedabad?.AboutBsidesAhmedabad?.Title}</h2>
              }
              <div className={`${styles.Desription}`}>
                {OverviewContent?.SecurityBsidesAhmedabad?.AboutBsidesAhmedabad?.Desription}
              </div>
            </div>
        </div>
        <div className={`AnimateCircle ${styles.AnimateCircle}`}>
          <Image src={OverviewContent?.GlobalAnimateCircleImage} alt="circleImage" width={999} height={900} />
        </div>
      </section>
    </>
  );
};

export default AboutBsidesAhmedabad;