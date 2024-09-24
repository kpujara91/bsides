"use client"
import React, { useState } from "react";
import styles from "./CxoAndWomenSecurityTrack.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import Image from "next/image";

const CxoAndWomenSecurityTrack: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("Day1"); // State to track the selected day

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
            {/* {ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.Day1Date && (
              <p className="caption inline-block">
                {ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.Day1Date}
              </p>
            )} */}
          </div>

          {/* Day 1 and Day 2 Toggle */}
          <div className={`flex items-center justify-center flex-wrap gap-5 mt-10 ${styles.eventsTimeLine}`}>
            <button
              className={`${styles.tabButton} ${selectedDay === "Day1" ? styles.activeTab : ""}`}
              onClick={() => setSelectedDay("Day1")}
            >
              Day 1
            </button>
            <button
              className={`${styles.tabButton} ${selectedDay === "Day2" ? styles.activeTab : ""}`}
              onClick={() => setSelectedDay("Day2")}
            >
              Day 2
            </button>
          </div>


          <div
            className={`flex items-center title-wrapper justify-center flex-wrap gap-5 mt-10  ${styles.eventsTimeLine}`}
          >
               <p className="caption inline-block">
            {selectedDay =="Day1" ? ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.Day1Date:ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.Day2Date}
            </p>

            </div>
        </div>

        <div className={styles.technicalCardsWrapper}>
          {selectedDay === "Day1" &&
            ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.TechnicalTalkListsDay1?.map(
              (lists, i) => {
                return (
                  <React.Fragment key={i}>
                    {(lists?.ScheduleTitle || lists?.ScheduleTime) && (
                      <div className={styles.techCardLists}>
                        <div className={styles.techCard}>
                          <div className={styles.breakBox}>
                            <p className={`${styles.caption}`}>{lists?.ScheduleTitle}</p>
                            <p className={styles.ScheduleTime}>{lists?.ScheduleTime}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {lists?.SpeakerDetails?.map((items, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className={styles.techCardLists}>
                            <div className={` ${styles.techCard}`}>
                              <div
                                className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-5 flex-wrap md:flex-nowrap ${styles.topContent} ${styles.breakBox}`}
                              >
                                <div className={`text-center shrink-0 order-1 ${styles.leftBadge}`}>
                                  <p className={`${styles.badge}`}>CXO STAGE</p>
                                  <span>{items?.mainStageName}</span>
                                </div>

                                {items?.MainTitle && (
                                  <div className={`${styles.caption}  text-center`}>
                                    {/* <h3> */}
                                      {items?.MainTitle}

                                    {/* </h3> */}
                                  </div>
                                )}
                                <div className="text-center shrink-0 order-2">
                                  <p className={styles.badge}>Time</p>
                                  <span>{items?.providedTime}</span>
                                </div>
                              </div>
                              {/* {items?.innerDetails?.speakerTitle

                              } */}
                              {items?.mainStageName !='AWARDS' ?<div
                                className={`flex items-stretch justify-center flex-wrap gap-5 ${styles.EventMembersWrap}`}
                              >
                                {items?.innerDetails?.map((subitem, i) => {
                                  return (
                                    
                                    <React.Fragment key={i}>
                                      {subitem?.speakerTitle ==='Moderator'?
                                        <div className="flex items-center justify-center w-full">
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
                                              {subitem?.speakerTitle &&<span className={styles.speaker}>
                                                {subitem?.speakerTitle}
                                              </span>}
                                              <h4>{subitem?.name}</h4>
                                              {subitem?.url ? (
                                                <p className={styles.desc}>
                                                  <a href={subitem.url} 
                                                  target='_blank'>
                                                    {subitem.description}
                                                  </a>
                                                </p>
                                              ) : (
                                                <p className={styles.desc}>{subitem.description}</p>
                                              )}
                                              {subitem?.subtitle && (
                                                <p>{subitem?.subtitle}</p>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                        :
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
                                          {subitem?.speakerTitle&&<span className={styles.speaker}>
                                            {subitem?.speakerTitle}
                                          </span>}
                                          <h4>{subitem?.name}</h4>
                                          {subitem?.url ? (
                                            <p className={styles.desc}>
                                              <a href={subitem.url} target='_blank'>
                                                {subitem.description}
                                              </a>
                                            </p>
                                          ) : (
                                            <p className={styles.desc}>{subitem.description}</p>
                                          )}
                                          {subitem?.subtitle && (
                                            <p>{subitem?.subtitle}</p>
                                          )}
                                        </div>
                                      </div>
                                      }
                                    </React.Fragment>
                                  );
                                })}
                              </div>:<>   {items?.innerDetails?.map((subitem, i) => {
                                return(
                                  <React.Fragment key={i}>
                                <div className={styles.imageBoxAward}>
                                          <Image
                                            src={subitem?.imagePath}
                                            alt="image1"
                                          />
                                        </div>
                                        </React.Fragment>
                              )})}</>}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              }
            )}

          {selectedDay === "Day2" &&
            ScheduleContent?.Schedule?.CxoAndWomenSecurityTrackContent?.TechnicalTalkListsDay2?.map(
              (lists, i) => {
                return (
                  <React.Fragment key={i}>
                    {(lists?.ScheduleTitle || lists?.ScheduleTime) && (

                      <div className={styles.techCardLists}>
                        <div className={styles.techCard}>
                          <div className={styles.breakBox}>
                            <p className={`${styles.caption}`}>{lists?.ScheduleTitle}</p>
                            <p className={styles.ScheduleTime}>{lists?.ScheduleTime}</p>
                          </div>
                        </div>
                      </div>
                      
                    )}
                    {lists?.SpeakerDetails?.map((items, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className={styles.techCardLists}>
                            <div className={` ${styles.techCard}`}>
                              <div
                                className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-5 flex-wrap md:flex-nowrap ${styles.topContent} ${styles.breakBox}`}
                              >
                                <div className={`text-center shrink-0 order-1 ${styles.leftBadge}`}>
                                  <p className={`${styles.badge}`}>CXO STAGE</p>
                                  <span>{items?.mainStageName}</span>
                                </div>

                                {items?.MainTitle && (
                                  <div className={`${styles.caption}  text-center`}>
                                    {/* <h3> */}
                                      {items?.MainTitle}

                                    {/* </h3> */}
                                  </div>
                                )}
                                <div className="text-center shrink-0 order-2">
                                  <p className={styles.badge}>Time</p>
                                  <span>{items?.providedTime}</span>
                                </div>
                              </div>
                              {/* {items?.innerDetails?.speakerTitle

                              } */}
                              <div
                                className={`flex items-stretch justify-center flex-wrap gap-5 ${styles.EventMembersWrap}`}
                              >
                                {items?.innerDetails?.map((subitem, i) => {
                                  return (
                                    
                                    <React.Fragment key={i}>
                                      {subitem?.speakerTitle ==='Moderator'?
                                        <div className="flex items-center justify-center w-full">
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
                                              {subitem?.url ? (
                                                <p className={styles.desc}>
                                                  <a href={subitem.url} target='_blank'>
                                                    {subitem.description}
                                                  </a>
                                                </p>
                                              ) : (
                                                <p className={styles.desc}>{subitem.description}</p>
                                              )}
                                              {subitem?.subtitle && (
                                                <p>{subitem?.subtitle}</p>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                        :
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
                                          {subitem?.url ? (
                                            <p className={styles.desc}>
                                              <a href={subitem.url} target='_blank'>
                                                {subitem.description}
                                              </a>
                                            </p>
                                          ) : (
                                            <p className={styles.desc}>{subitem.description}</p>
                                          )}
                                          {subitem?.subtitle && (
                                            <p>{subitem?.subtitle}</p>
                                          )}
                                        </div>
                                      </div>
                                      }
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
        </div>
      </div>
    </section>
   
  );
};

export default CxoAndWomenSecurityTrack;
