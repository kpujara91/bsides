import React from "react";
import styles from "./Awards.module.scss";
import { ScholarshipContent } from "@/components/JsonFiles/scholarship";
import Image from "next/image";

const Awards: React.FC = () => {
  return (
    <>
    <section className={`${styles.awardsWrapper} ptb-160`}>
        <div className="container">
          <div className={`title-wrapper ${styles.titleWrapper} `}>
              <div className="center-image">

                  <Image src={ScholarshipContent?.Awards?.ScholarshipImage}  alt="Scholarship image" className="object-none object-center"/>

                  <div className="text-center mt-4">
              <a className={` comonBtn`}  href={ScholarshipContent?.Sponsors?.Banner?.BookNowButtonURL} target="_blank">Submit Your Nomination</a>
            </div>
              </div>

          </div>
        </div>
      
    </section>
    </>
  );
};

export default Awards;