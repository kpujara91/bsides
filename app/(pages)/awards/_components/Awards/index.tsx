import React from "react";
import styles from "./Awards.module.scss";
import { AwardsContent } from "@/components/JsonFiles/awards";

const Awards: React.FC = () => {
  return (
    <>
    <section className={`${styles.awardsWrapper} ptb-160`}>
        <div className="container">
        {/* <div className="title-wrapper text-center">
            <h2 className='title'>{AwardsContent?.Awards?.MainTitle}</h2>
        </div> */}
            <div className='no-data'>Coming Soon</div>
        </div>
    </section>
    </>
  );
};

export default Awards;