"use client";
import React, { useRef } from "react";
import styles from "./EventTimeLine.module.scss";
import { ScheduleContent } from "@/components/JsonFiles/schedule";
import Image from "next/image";
import Link from "next/link";
import TechnicalTalkTrack from "../TechnicalTalkTrack";
import CxoAndWomenSecurityTrack from "../CxoAndWomenSecurityTrack";
import VillageTrack from "../VillageTrack";
import { useRouter } from "next/navigation";
import WorkshopTrack from "../WorkshopTrack/WorkshopTrack";

const EventTimeLine: React.FC = () => {
  const router = useRouter();
  const techRef = useRef<HTMLDivElement>(null);
  const cxoRef = useRef<HTMLDivElement>(null);
  const workShopRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: any) => {
    if (id === 1) {
      techRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (id === 2) {
      cxoRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (id === 3) {
      workShopRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (id === 4) {
      // router.push()
    }
  };

  return (
    <>
      <section className={`${styles.eventTimeLineWrapper} ptb-160`}>
        <div className="container">
          <div className={`${styles.titleWrapper} title-wrapper text-center`}>
            <h2 className={`title ${styles.title}`}>
              {ScheduleContent?.Schedule?.EventTimeLineContent?.MainTitle}
            </h2>
            <h3 className={`title h2 ${styles.smallTitle}`}>
              {ScheduleContent?.Schedule?.EventTimeLineContent?.SubTitle}
            </h3>
            <div
              className={`flex items-center justify-center flex-wrap gap-5 ${styles.eventsTimeLine}`}
            >
              <p className="caption inline-block">
                {ScheduleContent?.Schedule?.EventTimeLineContent?.Date}
              </p>
              <p className="caption inline-block">
                {ScheduleContent?.Schedule?.EventTimeLineContent?.LocationTitle}
              </p>
            </div>
          </div>
          <div
            className={`flex items-stretch flex-wrap gap-5 xxl:gap-6 ${styles.TimeLineCardsWrapper}`}
          >
            {ScheduleContent?.Schedule?.EventTimeLineContent?.EventsLists?.map(
              (lists, i) => {
                return (
                  <React.Fragment key={i}>
                    <div
                      className={`flex items-start justify-between flex-col ${styles.eventCard}`}
                    >
                      <div className={`${styles.imageBox} w-full shrink-0`}>
                        {lists?.imageUrl && (
                          <Image src={lists.imageUrl} alt="Event Image" />
                        )}
                      </div>
                      <div
                        className={`flex items-start justify-between flex-col h-full w-full ${styles.content}`}
                      >
                        <div>
                          <h3 className={styles.title}>{lists?.title}</h3>
                          <p>{lists?.description}</p>
                        </div>
                        {lists?.url  ? (
                          
                          <Link href={lists?.url} className={styles.linkbtn}>
                            {lists?.urlTitle}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.4697 8.53033C11.1768 8.23744 11.1768 7.76256 11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303C11.1768 16.2374 11.1768 15.7626 11.4697 15.4697L14.1893 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H14.1893L11.4697 8.53033Z"
                                  fill="#ffffff"
                                />
                              </svg>
                          </Link>
                        ) : (
                          <>
                            <button onClick={() => handleScroll(lists?.id)} className={styles.linkbtn}>{lists?.urlTitle}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.4697 8.53033C11.1768 8.23744 11.1768 7.76256 11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303C11.1768 16.2374 11.1768 15.7626 11.4697 15.4697L14.1893 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H14.1893L11.4697 8.53033Z"
                                  fill="#ffffff"
                                />
                              </svg>
                              </button>
                          </>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            )}
          </div>
        </div>
      </section>
      <div ref={techRef}>
        <TechnicalTalkTrack />
      </div>
    <div ref={cxoRef}>
        <CxoAndWomenSecurityTrack />
      </div>
      <div ref={workShopRef}>
        <WorkshopTrack />
      </div>
    </>
  );
};

export default EventTimeLine;
