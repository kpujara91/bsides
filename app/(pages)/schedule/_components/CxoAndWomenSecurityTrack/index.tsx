"use client"
import React from "react";
import styles from "./CxoAndWomenSecurityTrack.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import Image from "next/image";

const CxoAndWomenSecurityTrack: React.FC = () => {
  return (
    <section className={`${styles.TechnicalTalkTrackWrapper} ptb-160`}>
      <div className="container">
        <div className={`${styles.titleWrapper} title-wrapper text-center`}>
          <h2 className={`title ${styles.title}`}>
            {ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.MainTitle}
          </h2>
          <div
            className={`flex items-center justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
          >
            <p className="caption inline-block">
              {ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.LocationTitle}
            </p>
            {ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.Date && (
              <p className="caption inline-block">
              {
                ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent
                  ?.Date
              }
            </p>
            )}
          </div>
        </div>
        {/* <div className={styles.technicalCardsWrapper}>
          {ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.TechnicalTalkLists?.map(
            (lists, i) => {
              return (
                <React.Fragment key={i}>
                {(lists?.breakTitle || lists?.breakTime) && (
                    <div className={styles.breakBox}>
                      <p className={`${styles.caption}`}>{lists?.breakTitle}</p>
                      <p className={styles.breakTime}>{lists?.breakTime}</p>
                    </div>
                  )}
                  {lists?.SpeakerDetails?.map((items, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div className={styles.techCardLists}>
                          <div className={` ${styles.techCard}`}>
                            <div
                              className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-10 flex-wrap md:flex-nowrap ${styles.topContent}`}
                            >
                              <div className={`text-center shrink-0 order-1 ${styles.leftBadge}`}>
                                <p className={`${styles.badge}`}>
                                  CXO STAGE
                                </p>
                                <span>{items?.mainStageName}</span>
                              </div>

                              {items?.MainTitle && (
                                <div className={`text-center w-full md:w-auto ${styles.CenterTitle}`}>
                                <h3>{items?.MainTitle}</h3>
                              </div>
                              )}
                              <div className="text-center shrink-0 order-2">
                                <p className={styles.badge}>
                                  Time
                                </p>
                                <span>{items?.providedTime}</span>
                              </div>
                            </div>
                            <div
                              className={`flex items-stretch justify-center flex-wrap gap-5 ${styles.EventMembersWrap}`}
                            >
                              {items?.innerDetails?.map((subitem, i) => {
                                return (
                                  <React.Fragment key={i}>
                                    <div className={styles.memberInfoBox}>
                                      <div className={styles.imageBox}>
                                        <Image
                                          src={subitem?.imagePath}
                                          alt="image1"
                                        />
                                      </div>
                                      <div
                                        className={`${styles.content} text-center`}
                                      >
                                        <span className={styles.speaker}>
                                          {subitem?.speakerTitle}
                                        </span>
                                        <h4>{subitem?.name}</h4>
                                        {subitem?.url ?
                                          <p className={styles.desc}>
                                            <a href={subitem.url}>
                                              {subitem.description}
                                            </a>
                                          </p>
                                        :
                                          <p className={styles.desc}>{subitem.description}</p>
                                        }
                                        {subitem?.subtitle && (
                                          <p>{subitem?.subtitle}</p>
                                        )}
                                      </div>
                                    </div>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            }
          )}
        </div> */}
         <div className='no-data'>Coming Soon</div>
      </div>
    </section>
  );
};

export default CxoAndWomenSecurityTrack;
