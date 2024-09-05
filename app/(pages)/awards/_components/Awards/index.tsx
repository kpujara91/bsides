import React from "react";
import styles from "./Awards.module.scss";
import { AwardsContent } from "@/components/JsonFiles/awards";
import Image from "next/image";

const Awards: React.FC = () => {
  return (
    <>
    <section className={`${styles.awardsWrapper} ptb-160`}>
        <div className="container">
          <div className={`title-wrapper ${styles.titleWrapper} `}>
              <h2 className='title'>{AwardsContent?.Awards?.MainTitle}</h2>
              <div className="custom-row">
                <div className="custom-col">
                  <p>{AwardsContent?.Awards?.description1}</p>
                  <p>{AwardsContent?.Awards?.description2}</p>
                  <ul style={{color:"white" }} className="list-disc bullet-lists">
  {AwardsContent?.Awards?.awardData?.map((awa, i) => (
    <li key={i}>{awa}</li>
  ))}
</ul> 
                </div>
                <div className="custom-col">
                  <Image src={AwardsContent?.Awards?.AwardsImage}  alt="awrds image" />
                </div>
              </div>

          </div>
        </div>
    </section>
    <section className={`${styles.MaestroAwards} ptb-160`}>
        <div className="container">
          <div className={`title-wrapper ${styles.titleWrapper} `}>
              <h2 className='title'>{AwardsContent?.AwardsEntryGuidelines?.MainTitle}</h2>
              <p>{AwardsContent?.AwardsEntryGuidelines?.description}</p>
          </div>
          <div className={`${styles.awardsLists} title-wrapper `}>
             <h3 className="caption ">{AwardsContent?.AwardsEntryGuidelines?.SubTitle}</h3>
             <ul>
                {AwardsContent?.AwardsEntryGuidelines?.EligibilityLists.map((items,i) =>{
                  return(
                    <React.Fragment key={i}>
                      <li>
                        <h3 className={styles.title}>{items.title}</h3>
                        <p>{items.description}</p>
                      </li>
                    </React.Fragment>
                  )
                })}
             </ul>
          </div>

        </div>
    </section>
    <section className={`${styles.SubmissionRequirements} pb-80 `}>
      <div className="container">
      <div className={`${styles.awardsLists} title-wrapper `}>
             <h3 className="caption ">{AwardsContent?.AwardsEntryGuidelines?.SubmissionRequirementsTitle}</h3>
             <ul>
                {AwardsContent?.AwardsEntryGuidelines?.SubmissionRequirementsLists.map((items,i) =>{
                  return(
                    <React.Fragment key={i}>
                      <li>
                        <h3 className={styles.title}>{items.title}</h3>
                        <p>{items.description}</p>
                      </li>
                    </React.Fragment>
                  )
                })}
             </ul>
          </div>
      </div>
    </section>

    <section className={`${styles.AdditionalInformation} pb-80`}>
      <div className="container">
      <div className={`${styles.awardsLists} title-wrapper `}>
             <h3 className="caption ">{AwardsContent?.AwardsEntryGuidelines?.AdditionalInformationTitle}</h3>
             <ul>
                {AwardsContent?.AwardsEntryGuidelines?.AdditionalInformationLists.map((items,i) =>{
                  return(
                    <React.Fragment key={i}>
                      <li>
                        <h3 className={styles.title}>{items.title}</h3>
                        <p>{items.description}</p>
                      </li>
                    </React.Fragment>
                  )
                })}
             </ul>
          </div>
      </div>
    </section>
    </>
  );
};

export default Awards;