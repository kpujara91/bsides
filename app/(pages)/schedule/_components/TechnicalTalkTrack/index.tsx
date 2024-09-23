"use client";
import React, { useState } from "react";
import styles from "./TechnicalTalkTrack.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import Image from "next/image";

const TechnicalTalkTrack: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");

  return (
    <section className={`${styles.TechnicalTalkTrackWrapper} ptb-160`}>
      <div className="container">
        <div className={`${styles.titleWrapper} title-wrapper text-center`}>
          <h2 className={`title ${styles.title}`}>
            {ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.MainTitle}
          </h2>
          <div
            className={`flex items-center justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
          >
            <p className="caption inline-block">
              {ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.LocationTitle}
            </p>
            {/* <p className="caption inline-block">
              {ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.Time}
            </p> */}
          </div>

          {/* Tabs for Day 1 and Day 2 */}
          <div className={`flex items-center justify-center flex-wrap gap-5 mt-20 ${styles.eventsTimeLine}`}>
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

        </div>
        <div
            className={`flex items-center title-wrapper justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
          >
               <p className="caption inline-block">
            {selectedDay =="Day1" ? ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.Day1Date:ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.Day2Date}
            </p>

            </div>



            {/* <div className={styles.technicalCardsWrapper}> 
            {selectedDay === "Day1" &&
            ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.TechnicalTalkListsDay1?.map((lists, listIndex) => (

            ))}
            </div> */}
     
        <div className={styles.technicalCardsWrapper}>
          {selectedDay === "Day1" &&
            ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.TechnicalTalkListsDay1?.map(
              (lists, listIndex) => (
                
        
                <React.Fragment key={listIndex}>
               
                 {/* {lists?.SpeakerDetails?.innerDetails?.length ===0 && <>{(lists?.ScheduleTitle || lists?.ScheduleTime) && (
                    <div className={styles.breakBox}>
                      <p className={`${styles.caption}`}>{lists?.ScheduleTitle}</p>
                      <p className={styles.ScheduleTime}>{lists?.ScheduleTime}</p>
                    </div>
                  )}</> } */}

                  {lists?.SpeakerDetails && lists?.SpeakerDetails?.innerDetails?.length ===0 ? (
                    <>{(lists?.ScheduleTitle || lists?.ScheduleTime) && (
                    <div className={styles.breakBox}>
                      <p className={`${styles.caption}`}>{lists?.ScheduleTitle}</p>
                      <p className={styles.ScheduleTime}>{lists?.ScheduleTime}</p>
                    </div>
                  )}</>) : (
                    <>
                    {/* {lists?.SpeakerDetails?.innerDetails?.map((subitem, i) => ( 
                       <React.Fragment key={i}>*/}
                      
                        <div className={styles.techCardLists}>  
                          <div className={` ${styles.techCard}`}>
                            <div
                              className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-5 flex-wrap md:flex-nowrap ${styles.topContent}`}
                            >
                              <div className="text-center shrink-0">
                              <p className={`${styles.badge}`}>{lists?.StageName}</p>
                              <span>{lists?.mainStageName}</span>
                              </div>
                                <p  className={`${styles.caption} text-center`}>{lists?.ScheduleTitle}</p>
                            
                              {lists?.ScheduleTime &&(<div className="text-center shrink-0 order-2">
                                <p className={styles.badge}>Time</p>
                                <span>{lists?.ScheduleTime}</span>
                              </div>)}
                            </div>
                            
                            <div
                              className={`flex items-stretch justify-center flex-wrap gap-5 ${styles.EventMembersWrap}`}
                            >
                            {lists?.SpeakerDetails && lists?.SpeakerDetails?.innerDetails?.map((subitem, i) => (
                              <React.Fragment key={i}>
                            
                              {/* {lists?.SpeakerDetails?.map((subitem, i) => ( */}
                                {/* <React.Fragment key={i}> */}
                                  <div className={styles.memberInfoBox}>
                                    <div className={styles.imageBox}>
                                      <Image
                                        src={subitem.imagePath}
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
                                          <a
                                            href={subitem.url}
                                            target='_blank'
                                            // style={{
                                            //   display: "flex",
                                            //   alignItems: "flex-start",
                                            //   maxWidth: "80%",
                                            //   margin: "auto",
                                            // }}
                                          >
                                            {subitem?.logo && (
                                              <Image
                                                src={subitem?.logo}
                                                alt=""
                                                height={20}
                                                width={20}
                                              />
                                            )}{" "}
                                            <span>{subitem.description}</span>
                                          </a>
                                        </p>
                                      ) : (
                                        <p className={styles.desc}>
                                          {subitem.description}
                                        </p>
                                      )}
                                      {subitem?.subtitle && (
                                        <p>{subitem?.subtitle}</p>
                                      )}
                                    </div>
                                  </div>
                                {/* </React.Fragment> */}
                              {/* // ))} */}
                            </React.Fragment>
                            ))}
                            </div>
                          </div>
                        </div>
                      {/* </React.Fragment>
                     ))}  */}
                    </>
                  ) }
                 
                </React.Fragment>
              )
            )}

          {selectedDay === "Day2" &&
            ScheduleContent?.Schedule?.TechnicalTalkTrackContent?.TechnicalTalkListsDay2?.map(
              (lists, listIndex) => (
                
        
                <React.Fragment key={listIndex}>
               
                 {/* {lists?.SpeakerDetails?.innerDetails?.length ===0 && <>{(lists?.ScheduleTitle || lists?.ScheduleTime) && (
                    <div className={styles.breakBox}>
                      <p className={`${styles.caption}`}>{lists?.ScheduleTitle}</p>
                      <p className={styles.ScheduleTime}>{lists?.ScheduleTime}</p>
                    </div>
                  )}</> } */}

                  {lists?.SpeakerDetails && lists?.SpeakerDetails?.innerDetails?.length ===0 ? (
                    <>{(lists?.ScheduleTitle || lists?.ScheduleTime) && (
                    <div className={styles.breakBox}>
                      <p className={`${styles.caption}`}>{lists?.ScheduleTitle}</p>
                      <p className={styles.ScheduleTime}>{lists?.ScheduleTime}</p>
                    </div>
                  )}</>) : (
                    <>
                    {/* {lists?.SpeakerDetails?.innerDetails?.map((subitem, i) => ( 
                       <React.Fragment key={i}>*/}
                      
                        <div className={styles.techCardLists}>  
                          <div className={` ${styles.techCard}`}>
                            <div
                              className={`flex items-center justify-between gap-x-3 gap-y-5 md:gap-5 flex-wrap md:flex-nowrap ${styles.topContent}`}
                            >
                              <div className="text-center shrink-0">
                              <p className={`${styles.badge}`}>{lists?.StageName}</p>
                              <span>{lists?.mainStageName}</span>
                              </div>
                                <p  className={`${styles.caption} text-center`}>{lists?.ScheduleTitle}</p>
                            
                              {lists?.ScheduleTime &&(<div className="text-center shrink-0 order-2">
                                <p className={styles.badge}>Time</p>
                                <span>{lists?.ScheduleTime}</span>
                              </div>)}
                            </div>
                            
                            <div
                              className={`flex items-stretch justify-center flex-wrap gap-5 ${styles.EventMembersWrap}`}
                            >
                            {lists?.SpeakerDetails && lists?.SpeakerDetails?.innerDetails?.map((subitem, i) => (
                              <React.Fragment key={i}>
                            
                              {/* {lists?.SpeakerDetails?.map((subitem, i) => ( */}
                                {/* <React.Fragment key={i}> */}
                                  <div className={styles.memberInfoBox}>
                                    <div className={styles.imageBox}>
                                      <Image
                                        src={subitem.imagePath}
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
                                          <a
                                            href={subitem.url}
                                            target='_blank'
                                            // style={{
                                            //   display: "flex",
                                            //   alignItems: "flex-start",
                                            //   maxWidth: "80%",
                                            //   margin: "auto",
                                            // }}
                                          >
                                            {subitem?.logo && (
                                              <Image
                                                src={subitem?.logo}
                                                alt=""
                                                height={20}
                                                width={20}
                                              />
                                            )}{" "}
                                            <span>{subitem.description}</span>
                                          </a>
                                        </p>
                                      ) : (
                                        <p className={styles.desc}>
                                          {subitem.description}
                                        </p>
                                      )}
                                      {subitem?.subtitle && (
                                        <p>{subitem?.subtitle}</p>
                                      )}
                                    </div>
                                  </div>
                                {/* </React.Fragment> */}
                              {/* // ))} */}
                            </React.Fragment>
                            ))}
                            </div>
                          </div>
                        </div>
                      {/* </React.Fragment>
                     ))}  */}
                    </>
                  ) }
                 
                </React.Fragment>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalTalkTrack;
