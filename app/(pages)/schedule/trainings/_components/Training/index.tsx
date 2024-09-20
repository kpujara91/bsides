"use client"
import React from "react";
import styles from "./Training.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import { PassesContent } from "@/components/JsonFiles/passes";
import Image from "next/image";
import { trainings } from '@/components/JsonFiles/trainings'
import Link from "next/link";

const Training: React.FC = () => {
  return (
    <section className={`${styles.TechnicalTalkTrackWrapper} ptb-160`}>
      <div className="container">
        <div className={`${styles.titleWrapper} title-wrapper text-center`}>
          <h2 className={`title ${styles.title}`}>
            {ScheduleContent?.Trainings?.traingsContent?.MainTitle}
          </h2>
          <div className='mb-10'>
            <Link href={PassesContent?.Banner?.BookNowButtonURL} target="_blank" className={`font-nasalization ${styles.BannerBtn}`}>{PassesContent?.Banner?.BookNowButtonText}</Link>
          </div>
          <div
            className={`flex items-center justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
          >
            {/* <p className="caption inline-block">
              {ScheduleContent?.Trainings?.traingsContent?.LocationTitle}
            </p> */}
            {ScheduleContent?.Trainings?.traingsContent?.Date && (
              <p className="caption inline-block">
                {
                  ScheduleContent?.Trainings?.traingsContent?.Date
                }
              </p>
            )}
          </div>
        </div>


        <div className={`title-wrapper ${styles.CfpDetailsWrapper}`}>
          <h2 className='title mb-8'>{trainings?.CfpContents?.MainTitle}</h2>
          <p className='mb-10'>{trainings?.CfpContents?.description}</p>
          <h3 className='title mb-8'>{trainings?.CfpContents?.TopicsCovered?.title}</h3>
          <p className='mb-10'>{trainings?.CfpContents?.TopicsCovered?.description}</p>
          {/* <div className='mb-10'>
            <Link href={PassesContent?.Banner?.BookNowButtonURL} target="_blank" className={`font-nasalization ${styles.BannerBtn}`}>{PassesContent?.Banner?.BookNowButtonText}</Link>
          </div> */}
          {/* <ul className='mb-10'>{trainings?.CfpContents?.TopicsCovered?.topicLists?.map((topic, index) => (
            <li key={index} className={styles.bulletPoint}>{`${topic}`}</li>
          ))}</ul> */}
          <h3 className='title mb-8'>{trainings?.CfpContents?.TechnicalTalks?.title}</h3>
          <ul className='mb-0'>{trainings?.CfpContents?.TechnicalTalks?.RedTeamHighlights?.map((topic, index) => (
            <li key={index} className={`${styles.bulletPoint} ml-10 list-disc`}>{`${topic}`}</li>
          ))}</ul>
          <ul className='mb-10'>{trainings?.CfpContents?.TechnicalTalks?.RedTeamHighlightsInner?.map((topic, index) => (
            <li key={index} className={`${styles.bulletcirclePoint} ml-14 `} style={{marginLeft: '90px'}}>{`${topic}`}</li>
          ))}</ul>
          {/* <p className='mb-10'>{trainings?.CfpContents?.TechnicalTalks?.description}</p> */}
          <h3 className='title mb-8'>{trainings?.CfpContents?.Workshops?.title}</h3>
          <ul className='mb-10'>{trainings?.CfpContents?.Workshops?.BlueTeamHighlights?.map((topic, index) => (
            <li key={index} className={`${styles.bulletPoint} ml-10 list-disc`}>{`${topic}`}</li>
          ))}</ul>
          {/* <p className='mb-10'>{trainings?.CfpContents?.Workshops?.BlueTeamHighlights}</p> */}
          <div className="flex items-baseline">
            <h3 className='title mb-8'>{trainings?.CfpContents?.Format?.title}</h3>
            <p className='mb-10 pl-2'>{trainings?.CfpContents?.Format?.description}</p>
          </div>
          <div className="flex items-baseline">
            <h3 className='title mb-8'>{trainings?.CfpContents?.Trainers?.title}</h3>
            <p className='mb-10 pl-2'>{trainings?.CfpContents?.Trainers?.description}</p>
          </div>
          <h3 className='title mb-8'>{trainings?.CfpContents?.TableOfContent?.title}</h3>
          <ul className='mb-10'>
            {trainings?.CfpContents?.TableOfContent?.sections?.map((section: any, sectionIndex: any) => (
              <li key={sectionIndex} className={`${styles.bulletPoint} ml-5 mb-8`}>
                <h4 className='title mb-8'>{`${section.number}. ${section.title}`}</h4>
                {section?.subsections?.length > 0 && (
                  <ul className='ml-5'>
                    {section.subsections.map((subsection: any, subsectionIndex: any) => (
                      <li key={subsectionIndex} className='ml-5'>
                        {`${subsection.letter}. ${subsection.title}`}
                        {subsection?.subsubsections?.length > 0 && (
                          <ul className='ml-5'>
                            {subsection.subsubsections.map((subsubsection: any, subsubsectionIndex: any) => (
                              <li key={subsubsectionIndex} className='ml-5'>
                                {`${subsubsection.roman}. ${subsubsection.title}`}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <h3 className='title mb-8'>{trainings?.CfpContents?.Deliverable?.title}</h3>
          <ul className='mb-10'>{trainings?.CfpContents?.Deliverable?.PreRequisitesHighlights?.map((topic, index) => (
            <li key={index} className={`${styles.bulletPoint} ml-5 list-disc`}>{`${topic}`}</li>
          ))}</ul>

          <div className="flex items-baseline">
            <h3 className='title mb-8'>{trainings?.CfpContents?.NOTE?.title}</h3>
            <p className='mb-10 pl-2'>{trainings?.CfpContents?.NOTE?.description}</p>
          </div>

          <h3 className='title mb-8'>{trainings?.CfpContents?.PreRequisites?.title}</h3>
          <ul className='mb-10'>{trainings?.CfpContents?.PreRequisites?.PreRequisitesHighlights?.map((topic, index) => (
            <li key={index} className={`${styles.bulletPoint} ml-5 list-disc`}>{`${topic}`}</li>
          ))}</ul>

          <h3 className='title mb-8'>{trainings?.CfpContents?.AttendeesTakeaway?.title}</h3>
          <ul className='mb-10'>{trainings?.CfpContents?.AttendeesTakeaway?.PreRequisitesHighlights?.map((topic, index) => (
            <li key={index} className={`${styles.bulletPoint} ml-5 list-disc`}>{`${topic}`}</li>
          ))}</ul>

          {/* <h3 className='title mb-8'>{trainings?.CfpContents?.TrainerInfraRequirements?.title}</h3>
          <ul className='mb-10'>{trainings?.CfpContents?.TrainerInfraRequirements?.PreRequisitesHighlights?.map((topic, index) => (
            <li key={index} className={`${styles.bulletPoint} ml-5 list-disc`}>{`${topic}`}</li>
          ))}</ul> */}

          <div className={`${styles.sponsorsLists}`}>
            {
              trainings?.CfpContents?.BIO?.map((items, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className={`flex gap-5 md:gap-7 flex-col md:flex-row overflow-hidden relative ${styles.sponsorsCard}`}>
                      <div className={styles.imageBox}>
                        <Image src={items?.ImagePath} alt='Sponsors Image' />
                      </div>
                      <div className={styles.content}>
                        <h3 className='title mb-8'>{items?.title}</h3>
                        {items?.description && items?.description?.map((des, i) => {
                          return (
                            <React.Fragment key={i}>
                              <p className='mb-3 last:mb-0'>{des}</p>
                            </React.Fragment>
                          )
                        })}
                        <ul className={`flex gap-2 flex-shrink-0 socialMediaList speakersocialMediaList`}>
                          {items?.speakerSocialMediaList?.map((list, j) => {
                            return (
                              <React.Fragment key={j}>
                                <li className={`inline-flex items-center justify-center`}><a href={list?.url} title={list?.title} className={`inline-flex items-center justify-center`} target='_blank'><Image src={list?.icon} alt={list?.title} width={16} height={16} /></a></li>
                              </React.Fragment>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>

          {/* <ul className='mb-10'>{trainings?.CfpContents?.TopicOfInterest?.interestTopicLists?.map((topic, index) => (
            <li key={index} className={styles.bulletPoint}>{topic}</li>
          ))}</ul> */}
          {/* <h3 className='title mb-8'>{trainings?.CfpContents?.CfpGuidelines?.title}</h3>
          <p className='mb-10'>{trainings?.CfpContents?.CfpGuidelines?.description}</p> */}
        </div>



        {/* <div className={styles.technicalCardsWrapper}>
          {ScheduleContent?.Trainings?.traingsContent?.TechnicalTalkLists?.map(
            (lists, i) => {
              return (
                <React.Fragment key={i}>
                    {(lists?.break[i]?.ScheduleTitle || lists?.break[i]?.ScheduleTime ) && <div className={`${styles.breakBox} flex justify-center  gap-4 flex-wrap flex-col text-center sm:justify-between sm:flex-row`}>
                      {lists?.break?.map((content,i) =>{
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
        </div>  */}


        {/* <div className='no-data'>Coming Soon</div> */}
      </div>
    </section>
  );
};

export default Training;
