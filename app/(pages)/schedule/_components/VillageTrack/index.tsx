"use client"
import React from "react";
import styles from "./VillageTrack.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import Image from "next/image";

const VillageTrack: React.FC = () => {
  return (
    <section className={`${styles.TechnicalTalkTrackWrapper} ptb-160`}>
      <div className="container">
         {/*<div className={`${styles.titleWrapper} title-wrapper text-center`}>
          <h2 className={`title ${styles.title}`}>
            {ScheduleContent?.Schedule?.VillageTrackContent?.MainTitle}
          </h2>
          <div
            className={`flex items-center justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
          >
            <p className="caption inline-block">
              {ScheduleContent?.Schedule?.VillageTrackContent?.LocationTitle}
            </p>
            {ScheduleContent?.Schedule?.VillageTrackContent?.Date && (
              <p className="caption inline-block">
              {
                ScheduleContent?.Schedule?.VillageTrackContent?.Date
              }
            </p>
            )}
          </div>
        </div> */}
        {/* <div className={styles.technicalCardsWrapper}>
          {ScheduleContent?.Schedule?.VillageTrackContent?.VillageTrackLists?.SpeakerDetails.map(
            (lists, i) => {
              return (
                <React.Fragment key={i}>
                      <React.Fragment key={i}>
                        <div className={styles.techCardLists}>
                          <div className={` ${styles.techCard}`}>
                            <div
                              className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-5 flex-wrap md:flex-nowrap ${styles.topContent}`}
                            >
                              <div className={`text-center shrink-0 order-1 ${styles.leftBadge}`}>
                                <p className={`${styles.badge}`}>
                                  VILLAGE AREA
                                </p>
                                <span>{lists?.mainStageName}</span>
                              </div>

                              {lists?.MainTitle && (
                                <div className={`text-center w-full md:w-auto ${styles.CenterTitle}`}>
                                <h3>{lists?.MainTitle}</h3>
                              </div>
                              )}
                              <div className="text-center shrink-0 order-2">
                                <p className={styles.badge}>
                                  Time
                                </p>
                                <span>{lists?.providedTime}</span>
                              </div>
                            </div>
                            <div
                              className={`flex items-stretch justify-center flex-wrap gap-5 ${styles.EventMembersWrap}`}
                            >
                              {lists?.innerDetails?.map((subitem, i) => {
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
                </React.Fragment>
              );
            }
          )}

        <div className={`${styles.breakBox} flex justify-center  gap-4 flex-wrap flex-col text-center sm:justify-between sm:flex-row`}>
          {ScheduleContent?.Schedule?.VillageTrackContent?.VillageTrackLists?.mainStage?.map((content,i) =>{
            return(
              <React.Fragment key={i}>
                {(content?.ScheduleTitle || content?.ScheduleTime) && (
                <div>
                  <p className={`${styles.caption}`}>{content?.ScheduleTitle}</p>
                  <p className={styles.ScheduleTime}>{content?.ScheduleTime}</p>
                </div>
                )}
              </React.Fragment>
            )
          }
          )}
        </div>
        <div className={`${styles.breakBox} flex justify-center  gap-4 flex-wrap flex-col text-center sm:justify-between sm:flex-row`}>
          {ScheduleContent?.Schedule?.VillageTrackContent?.VillageTrackLists?.Confluence?.map((content,i) =>{
            return(
              <React.Fragment key={i}>
                {(content?.ScheduleTitle || content?.ScheduleTime) && (
                <div>
                  <p className={`${styles.caption}`}>{content?.ScheduleTitle}</p>
                  <p className={styles.ScheduleTime}>{content?.ScheduleTime}</p>
                </div>
                )}
              </React.Fragment>
            )
          }
          )}
        </div>
        </div> */}
        <div className='no-data'>Coming Soon</div>
      </div>
    </section>
  );
};

export default VillageTrack;
