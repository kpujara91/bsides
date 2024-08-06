"use client"
import React from "react";
import styles from "./Training.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import Image from "next/image";

const Training: React.FC = () => {
  return (
    <section className={`${styles.TechnicalTalkTrackWrapper} ptb-160`}>
      <div className="container">
        <div className={`${styles.titleWrapper} title-wrapper text-center`}>
          <h2 className={`title ${styles.title}`}>
            {ScheduleContent?.Trainings?.traingsContent?.MainTitle}
          </h2>
          <div
            className={`flex items-center justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
          >
            <p className="caption inline-block">
              {ScheduleContent?.Trainings?.traingsContent?.LocationTitle}
            </p>
            {ScheduleContent?.Trainings?.traingsContent?.Date && (
              <p className="caption inline-block">
              {
                ScheduleContent?.Trainings?.traingsContent?.Date
              }
            </p>
            )}
          </div>
        </div>
        {/* <div className={styles.technicalCardsWrapper}>
          {ScheduleContent?.Trainings?.traingsContent?.TechnicalTalkLists?.map(
            (lists, i) => {
              return (
                <React.Fragment key={i}>
                    {(lists?.break[i]?.breakTitle || lists?.break[i]?.breakTime ) && <div className={`${styles.breakBox} flex justify-center  gap-4 flex-wrap flex-col text-center sm:justify-between sm:flex-row`}>
                      {lists?.break?.map((content,i) =>{
                        return(
                          <React.Fragment key={i}>
                            {(content?.breakTitle || content?.breakTime) && (
                            <div>
                              <p className={`${styles.caption}`}>{content?.breakTitle}</p>
                              <p className={styles.breakTime}>{content?.breakTime}</p>
                            </div>
                            )}
                          </React.Fragment>
                        )
                      }
                      )}
                    </div>}


                  {lists?.SpeakerDetails?.map((items, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div className={styles.techCardLists}>
                          <div className={` ${styles.techCard}`}>
                            <div
                              className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-5 flex-wrap md:flex-nowrap ${styles.topContent}`}
                            >
                              <div className={`text-center shrink-0 order-1 ${styles.leftBadge}`}>
                                <p className={`${styles.badge}`}>
                                  SPEAKER
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
                                  TIME
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
                                          <p className={styles.desc}>{subitem.description}</p>

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

export default Training;
